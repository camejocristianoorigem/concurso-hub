import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { PrismaModule } from './database/prisma.module';
import { ConcursosModule } from './modules/concursos/concursos.module';
import { IngestionModule } from './modules/ingestion/ingestion.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    PrismaModule,
    ConcursosModule,
    IngestionModule,
  ],
})
export class AppModule {}
