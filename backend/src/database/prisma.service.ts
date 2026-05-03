import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.connectWithRetry();
  }

  private async connectWithRetry(retries = 10, delay = 5000): Promise<void> {
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        await this.$connect();
        console.log('✅ Database connected');
        return;
      } catch (error) {
        console.error(`❌ Database connection failed (attempt ${attempt}/${retries})`);

        if (attempt === retries) {
          throw error;
        }

        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }
}
