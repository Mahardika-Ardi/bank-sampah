import { Controller, Get, VERSION_NEUTRAL } from '@nestjs/common';
import {
  HealthCheckService,
  HealthCheck,
  PrismaHealthIndicator,
  MemoryHealthIndicator,
} from '@nestjs/terminus';
import { PrismaService } from '../../infra/prisma/prisma.service.js';

@Controller({ path: 'health', version: VERSION_NEUTRAL })
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private db: PrismaHealthIndicator,
    private prisma: PrismaService,
    private memory: MemoryHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  async check() {
    const startTime = Date.now();

    const result = await this.health.check([
      () => this.db.pingCheck('database', this.prisma),
      () => this.memory.checkHeap('memory_heap', 150 * 1024 * 1024),
    ]);

    const latency = Date.now() - startTime;

    return {
      message: 'System health check completed',
      data: {
        ...result,
        performance: {
          databaseLatencyMs: latency,
        },
      },
    };
  }
}
