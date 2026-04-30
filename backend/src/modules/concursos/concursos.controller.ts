import { Controller, Get, Param, Query } from '@nestjs/common';
import { ConcursosService } from './concursos.service';

@Controller('concursos')
export class ConcursosController {
  constructor(private readonly concursosService: ConcursosService) {}

  @Get('destaques/melhores-salarios')
  melhoresSalarios() {
    return this.concursosService.melhoresSalarios();
  }

  @Get('destaques/mais-vagas')
  maisVagas() {
    return this.concursosService.maisVagas();
  }

  @Get('destaques/ultimos-adicionados')
  ultimosAdicionados() {
    return this.concursosService.ultimosAdicionados();
  }

  @Get('destaques/ultimos-dias')
  ultimosDias() {
    return this.concursosService.ultimosDias();
  }

  @Get()
  findAll(
    @Query('estado') estado?: string,
    @Query('area') area?: string,
    @Query('banca') banca?: string,
    @Query('status') status?: string,
    @Query('sort') sort?: string,
  ) {
    return this.concursosService.findAll({ estado, area, banca, status, sort });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.concursosService.findOne(id);
  }
}
