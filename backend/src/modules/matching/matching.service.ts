import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class MatchingService {
  constructor(private prisma: PrismaService) {}

  calculateScore(user: any, concurso: any): number {
    let score = 0;

    if (user.estado && user.estado === concurso.estado) {
      score += 30;
    }

    if (user.area && user.area === concurso.area) {
      score += 25;
    }

    if (user.nivel && user.nivel === concurso.nivel) {
      score += 20;
    }

    if (
      user.salarioMin &&
      concurso.salario &&
      concurso.salario >= user.salarioMin
    ) {
      score += 25;
    }

    return score;
  }

  async generateMatches(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    const concursos = await this.prisma.concurso.findMany();

    const results: any[] = [];

    for (const concurso of concursos) {
      const score = this.calculateScore(user, concurso);

      const match = await this.prisma.match.upsert({
        where: {
          userId_concursoId: {
            userId,
            concursoId: concurso.id,
          },
        },
        update: { score },
        create: {
          userId,
          concursoId: concurso.id,
          score,
        },
      });

      results.push(match);
    }

    return results;
  }

  async getMatches(userId: string) {
    return this.prisma.match.findMany({
      where: { userId },
      include: { concurso: true },
      orderBy: { score: 'desc' }, // 🔥 ordenação inteligente
    });
  }
}
