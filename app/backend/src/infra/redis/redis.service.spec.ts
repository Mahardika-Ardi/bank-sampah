import { Test, TestingModule } from '@nestjs/testing';
import { RedisService } from './redis.service.js';
import { ConfigService } from '@nestjs/config';
import { LoggerService } from '../logger/logger.service.js';
import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('RedisService', () => {
  let service: RedisService;

  const mockConfigService = {
    get: vi.fn((key: string) => {
      const values: Record<string, string> = {
        'redis.host': 'localhost',
        'redis.port': '6379',
      };
      return values[key];
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RedisService,
        { provide: ConfigService, useValue: mockConfigService },
        {
          provide: LoggerService,
          useValue: { log: vi.fn(), debug: vi.fn(), warn: vi.fn() },
        },
      ],
    }).compile();

    service = module.get<RedisService>(RedisService);
    await service.onModuleDestroy();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should build tenant-scoped keys', () => {
    expect(RedisService.key('t-1', 'kategori', 'list')).toBe(
      'bank:t-1:kategori:list',
    );
    expect(RedisService.reportsPrefix('t-1')).toBe('bank:t-1:reports:');
  });

  it('should bypass reads when disconnected', async () => {
    expect(service.isAvailable()).toBe(false);
    await expect(service.get('bank:t:k')).resolves.toBeNull();
  });

  it('should skip writes when disconnected', async () => {
    await expect(service.set('k', { a: 1 }, 60)).resolves.toBeUndefined();
    await expect(service.delByPrefix('bank:t:')).resolves.toBeUndefined();
  });
});
