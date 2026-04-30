import { Module } from '@nestjs/common';
import { PrismaModule } from './database/prisma.module';
import { ConcursosModule } from './modules/concursos/concursos.module';

@Module({
  imports: [PrismaModule, ConcursosModule],
})
export class AppModule {}
