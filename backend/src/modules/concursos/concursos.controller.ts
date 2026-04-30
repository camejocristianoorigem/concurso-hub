import { Controller, Get, Param } from '@nestjs/common';
import { ConcursosService } from './concursos.service';

@Controller('concursos')
export class ConcursosController {
  constructor(private readonly concursosService: ConcursosService) {}

  @Get()
  findAll() {
    return this.concursosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.concursosService.findOne(id);
  }
}
