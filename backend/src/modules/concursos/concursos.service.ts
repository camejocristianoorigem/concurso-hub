import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class ConcursosService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(filters?: {
    estado?: string;
    area?: string;
    banca?: string;
    status?: string;
    sort?: string;
  }) {
    const orderByMap: Record<string, any> = {
      salario: { salario: 'desc' },
      vagas: { vagas: 'desc' },
      prazo: { dataInscricaoFim: 'asc' },
    };

    return this.prisma.concurso.findMany({
      where: {
        estado: filters?.estado,
        area: filters?.area,
        banca: filters?.banca,
        status: filters?.status,
      },
      orderBy: filters?.sort ? orderByMap[filters.sort] : { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    return this.prisma.concurso.findUnique({
      where: { id },
    });
  }

  async melhoresSalarios() {
    return this.prisma.concurso.findMany({
      orderBy: { salario: 'desc' },
      take: 5,
    });
  }

  async maisVagas() {
    return this.prisma.concurso.findMany({
      orderBy: { vagas: 'desc' },
      take: 5,
    });
  }

  async ultimosAdicionados() {
    return this.prisma.concurso.findMany({
      orderBy: { createdAt: 'desc' },
      take: 5,
    });
  }

  async ultimosDias() {
    return this.prisma.concurso.findMany({
      where: {
        status: 'aberto',
      },
      orderBy: { dataInscricaoFim: 'asc' },
      take: 5,
    });
  }
}
