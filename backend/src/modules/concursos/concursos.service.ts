import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class ConcursosService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.concurso.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    return this.prisma.concurso.findUnique({
      where: { id },
    });
  }
}
