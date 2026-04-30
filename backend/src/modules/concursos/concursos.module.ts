import { Module } from '@nestjs/common';
import { ConcursosService } from './concursos.service';
import { ConcursosController } from './concursos.controller';

@Module({
  providers: [ConcursosService],
  controllers: [ConcursosController]
})
export class ConcursosModule {}
