import { Test, TestingModule } from '@nestjs/testing';
import { ConcursosController } from './concursos.controller';

describe('ConcursosController', () => {
  let controller: ConcursosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConcursosController],
    }).compile();

    controller = module.get<ConcursosController>(ConcursosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
