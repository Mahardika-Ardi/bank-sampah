import { Test, TestingModule } from '@nestjs/testing';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import type { Request } from 'express';
import { ConfigService } from '@nestjs/config';
import { JwtStrategy } from './jwt.strategy.js';
import type { JwtPayload } from '../../../shared/types/jwt-payload.type.js';

describe('JwtStrategy', () => {
  let strategy: JwtStrategy;

  const mockConfigService = {
    getOrThrow: vi.fn((key: string) => {
      if (key === 'auth.jwtSecret') return 'test-secret';
      throw new Error(`Unexpected key: ${key}`);
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        JwtStrategy,
        { provide: ConfigService, useValue: mockConfigService },
      ],
    }).compile();

    strategy = module.get<JwtStrategy>(JwtStrategy);
  });

  it('should be defined', () => {
    expect(strategy).toBeDefined();
  });

  it('should return the JWT payload on validate', async () => {
    const payload: JwtPayload = {
      sub: 'user-id',
      username: 'nasabah_budi',
      tenantId: 'tenant-id',
    };

    const result = await strategy.validate({} as Request, payload);

    expect(result).toEqual(payload);
  });
});
