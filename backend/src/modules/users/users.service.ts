import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async updateProfile(
    userId: string,
    data: {
      estado?: string;
      area?: string;
      nivel?: string;
      salarioMin?: number;
    },
  ) {
    return this.prisma.user.update({
      where: { id: userId },
      data,
      select: {
        id: true,
        name: true,
        email: true,
        estado: true,
        area: true,
        nivel: true,
        salarioMin: true,
      },
    });
  }
}
