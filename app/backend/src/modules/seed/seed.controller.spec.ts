import { Test, TestingModule } from '@nestjs/testing';
import { SeedController } from './seed.controller.js';
import { SeedService } from './seed.service.js';
import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('SeedController', () => {
  let controller: SeedController;
  let mockSeedService: any;

  beforeEach(async () => {
    mockSeedService = {
      runSeed: vi.fn().mockResolvedValue({
        tenant: {
          id: 'tenant-id',
          name: 'Bank Sampah Utama',
          appKey: 'default-tenant-key',
        },
        user: { id: 'user-id', username: 'admin', role: 'admin_bank' },
      }),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeedController],
      providers: [{ provide: SeedService, useValue: mockSeedService }],
    }).compile();

    controller = module.get<SeedController>(SeedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should trigger database seeding and return success response', async () => {
    const result = await controller.seedDatabase();

    expect(result).toEqual({
      message: 'Seed executed successfully',
      data: {
        tenant: {
          id: 'tenant-id',
          name: 'Bank Sampah Utama',
          appKey: 'default-tenant-key',
        },
        user: { id: 'user-id', username: 'admin', role: 'admin_bank' },
      },
    });
    expect(mockSeedService.runSeed).toHaveBeenCalledOnce();
  });
});
