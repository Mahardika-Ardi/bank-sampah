import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { PrismaClient } from '../../../generated/prisma/client.js';
import { LoggerService } from '../logger/logger.service.js';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  private readonly pool: Pool;
  private readonly logger = new LoggerService('PrismaService');

  constructor(private readonly configService: ConfigService) {
    const connectionString = configService.get<string>('database.url');

    if (!connectionString) {
      const errorMsg =
        'DATABASE_URL is not configured in the environment variables';
      const loggerInstance = new LoggerService('PrismaService');
      loggerInstance.error(errorMsg);
      throw new Error(errorMsg);
    }

    const pool = new Pool({
      connectionString,
      max: 10,
      min: 2,
      idleTimeoutMillis: 30_000,
      connectionTimeoutMillis: 3_000,
    });

    super({
      adapter: new PrismaPg(pool),
      log: [
        { emit: 'event', level: 'query' },
        { emit: 'event', level: 'error' },
        { emit: 'event', level: 'warn' },
      ],
    });

    this.pool = pool;
  }

  async onModuleInit(): Promise<void> {
    try {
      await this.$connect();

      await this.$queryRaw`SELECT 1`;

      this.logger.log(
        'Successfully connected and verified database socket connection via Prisma adapter',
      );
    } catch (error) {
      this.logger.error(
        'Failed to connect or verify socket connection to the database. Ensure PostgreSQL service is running.',
        error instanceof Error ? error.stack?.trimStart() : undefined,
      );
      throw error;
    }
  }

  async onModuleDestroy(): Promise<void> {
    await this.$disconnect();
    await this.pool.end();
    this.logger.log('Database connection pool successfully closed');
  }
}
