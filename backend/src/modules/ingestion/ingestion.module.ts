import { Module } from '@nestjs/common';
import { IngestionController } from './ingestion.controller';
import { IngestionService } from './ingestion.service';
import { IngestionScheduler } from './ingestion.scheduler';
import { PrismaModule } from '../../database/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [IngestionController],
  providers: [IngestionService, IngestionScheduler],
})
export class IngestionModule {}
