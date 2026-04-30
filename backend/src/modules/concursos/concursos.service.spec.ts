import { Test, TestingModule } from '@nestjs/testing';
import { ConcursosService } from './concursos.service';

describe('ConcursosService', () => {
  let service: ConcursosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConcursosService],
    }).compile();

    service = module.get<ConcursosService>(ConcursosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
