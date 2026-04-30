import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as cheerio from 'cheerio';
import OpenAI from 'openai';
import { PrismaService } from '../../database/prisma.service';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

@Injectable()
export class IngestionService {
  constructor(private readonly prisma: PrismaService) {}

  async run() {
    const url = 'https://www.pciconcursos.com.br/concursos/';

    try {
      const { data } = await axios.get(url, {
        timeout: 8000,
        headers: { 'User-Agent': 'Mozilla/5.0' },
      });

      const $ = cheerio.load(data);
      const items: string[] = [];

      $('a').each((_, el) => {
        const text = $(el).text().replace(/\s+/g, ' ').trim();

        if (text && text.length > 30 && /concurso|processo seletivo/i.test(text)) {
          items.push(text);
        }
      });

      const uniqueItems = [...new Set(items)].slice(0, 10);
      let inserted = 0;
      let skipped = 0;

      for (const title of uniqueItems) {
        const exists = await this.prisma.concurso.findFirst({
          where: { titulo: title },
          select: { id: true },
        });

        if (exists) {
          skipped++;
          continue;
        }

        const enriched = await this.enrichWithAI(title);
        console.log('AI ENRICHED =>', enriched);

        await this.prisma.concurso.create({
          data: {
            titulo: title,
            orgao: enriched.orgao,
            banca: enriched.banca,
            estado: enriched.estado,
            area: enriched.area,
            cargo: enriched.cargo,
            salario: Number(enriched.salario) || 0,
            vagas: Number(enriched.vagas) || 0,
            nivel: enriched.nivel,
            status: 'aberto',
            dataPublicacao: new Date(),
            dataInscricaoInicio: new Date(),
            dataInscricaoFim: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
            linkEdital: url,
          },
        });

        inserted++;
      }

      return { source: url, inserted, skipped, items: uniqueItems };
    } catch (error) {
      console.error('INGESTION ERROR =>', error);

      return {
        source: url,
        status: 'unavailable',
        message: 'Source timeout or unreachable',
        items: [],
      };
    }
  }

  private async enrichWithAI(title: string) {
    try {
      const completion = await openai.responses.create({
        model: 'gpt-4.1-mini',
        input: `
Extraia e normalize este título de concurso em JSON válido com:
orgao, banca, estado, area, cargo, salario, vagas, nivel

Título:
${title}

Regras:
- responda SOMENTE JSON
- salario e vagas devem ser números
- sem markdown
        `,
      });

      const text = completion.output_text.trim();
      console.log('AI RAW =>', text);

      return JSON.parse(text);
    } catch (error) {
      console.error('AI PARSE ERROR =>', error);

      return {
        orgao: title.split(':')[0]?.slice(0, 120) || 'Órgão público',
        banca: 'A definir',
        estado: this.extractEstado(title),
        area: 'Administrativa',
        cargo: 'A definir',
        salario: 0,
        vagas: this.extractVagas(title),
        nivel: 'a definir',
      };
    }
  }

  private extractEstado(text: string) {
    const match = text.match(/\b([A-Z]{2})\b/);
    return match?.[1] || 'BR';
  }

  private extractVagas(text: string) {
    const match = text.match(/\b(\d+)\s+vagas?\b/i);
    return match ? Number(match[1]) : 0;
  }
}
