import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ExecutionContext } from '@nestjs/common';
import { ThrottlerStorage } from '@nestjs/throttler';
import { LoginThrottlerGuard } from './login-throttler.guard.js';

describe('LoginThrottlerGuard', () => {
  let guard: LoginThrottlerGuard;
  let mockStorage: Partial<ThrottlerStorage>;
  let mockReflector: any;
  let mockThrottlerOptions: any;

  beforeEach(() => {
    mockStorage = {
      increment: vi.fn().mockResolvedValue({
        totalHits: 1,
        timeToExpire: 60,
        isBlocked: false,
        timeToBlockExpire: 0,
      }),
    };

    mockReflector = {
      get: vi.fn(),
      getAllAndOverride: vi.fn(),
      getAllAndCompute: vi.fn(),
    };

    mockThrottlerOptions = [
      {
        ttl: 60,
        limit: 5,
      },
    ];

    guard = new LoginThrottlerGuard(
      mockThrottlerOptions,
      mockStorage as ThrottlerStorage,
      mockReflector,
    );
  });

  it('should be defined', () => {
    expect(guard).toBeDefined();
  });

  it('should extract correct IP tracker from request', async () => {
    const mockReq = { ip: '127.0.0.1' };
    const tracker = await (guard as any).getTracker(mockReq);

    expect(tracker).toBe('127.0.0.1');
  });
});
