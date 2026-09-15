import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from './prisma.service.js';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

describe('PrismaService', () => {
  let service: PrismaService;
  let module: TestingModule;

  const mockConfigService = {
    get: vi.fn((key: string) => {
      if (key === 'database.url') {
        return 'postgresql://postgres:password@localhost:5432/bank-sampah?schema=public';
      }
      return undefined;
    }),
  };

  beforeEach(async () => {
    module = await Test.createTestingModule({
      providers: [
        PrismaService,
        { provide: ConfigService, useValue: mockConfigService },
      ],
    }).compile();

    service = module.get<PrismaService>(PrismaService);
  });

  afterEach(async () => {
    if (module) {
      await module.close();
    }
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should throw an error if DATABASE_URL is missing', async () => {
    const invalidConfigService = {
      get: vi.fn().mockReturnValue(undefined),
    };

    await expect(
      Test.createTestingModule({
        providers: [
          PrismaService,
          { provide: ConfigService, useValue: invalidConfigService },
        ],
      }).compile(),
    ).rejects.toThrow(
      'DATABASE_URL is not configured in the environment variables',
    );
  });
});
