import { Test, TestingModule } from '@nestjs/testing';
import { HealthController } from './health.controller.js';
import {
  HealthCheckService,
  PrismaHealthIndicator,
  MemoryHealthIndicator,
} from '@nestjs/terminus';
import { PrismaService } from '../../infra/prisma/prisma.service.js';
import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('HealthController', () => {
  let controller: HealthController;
  let healthCheckService: HealthCheckService;

  const mockHealthCheckService = {
    check: vi.fn(),
  };

  const mockPrismaHealthIndicator = {
    pingCheck: vi.fn(),
  };

  const mockMemoryHealthIndicator = {
    checkHeap: vi.fn(),
  };

  const mockPrismaService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
      providers: [
        { provide: HealthCheckService, useValue: mockHealthCheckService },
        { provide: PrismaHealthIndicator, useValue: mockPrismaHealthIndicator },
        { provide: MemoryHealthIndicator, useValue: mockMemoryHealthIndicator },
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    controller = module.get<HealthController>(HealthController);
    healthCheckService = module.get<HealthCheckService>(HealthCheckService);

    vi.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('check', () => {
    it('should return system health status and performance metrics', async () => {
      const mockHealthResult = {
        status: 'ok',
        details: {
          database: { status: 'up' },
          memory_heap: { status: 'up' },
        },
      };

      mockHealthCheckService.check.mockResolvedValue(mockHealthResult);

      const result = await controller.check();

      expect(result).toEqual({
        message: 'System health check completed',
        data: {
          ...mockHealthResult,
          performance: {
            databaseLatencyMs: expect.any(Number),
          },
        },
      });
      expect(healthCheckService.check).toHaveBeenCalled();
    });
  });
});
