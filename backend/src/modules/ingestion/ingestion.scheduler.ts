import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { IngestionService } from './ingestion.service';

@Injectable()
export class IngestionScheduler {
  private readonly logger = new Logger(IngestionScheduler.name);

  constructor(private readonly ingestionService: IngestionService) {}

  @Cron('0 */6 * * *')
  async handleCron() {
    this.logger.log('Running scheduled ingestion...');
    await this.ingestionService.run();
  }
}
