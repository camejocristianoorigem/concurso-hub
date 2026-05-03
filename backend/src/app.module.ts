import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { PrismaModule } from './database/prisma.module';
import { ConcursosModule } from './modules/concursos/concursos.module';
import { IngestionModule } from './modules/ingestion/ingestion.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { MatchingModule } from './modules/matching/matching.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    PrismaModule,
    ConcursosModule,
    IngestionModule,
    AuthModule,
    UsersModule,
    MatchingModule,
  ],
})
export class AppModule {}
