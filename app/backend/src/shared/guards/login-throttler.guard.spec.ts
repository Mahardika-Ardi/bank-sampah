import { describe, it, expect, beforeEach, vi } from 'vitest';
import type { ThrottlerModuleOptions, ThrottlerStorage } from '@nestjs/throttler';
import type { Reflector } from '@nestjs/core';
import { LoginThrottlerGuard } from './login-throttler.guard.js';

class TestableThrottlerGuard extends LoginThrottlerGuard {
  public track(req: Record<string, unknown>): Promise<string> {
    return this.getTracker(req);
  }
}

describe('LoginThrottlerGuard', () => {
  let guard: TestableThrottlerGuard;

  beforeEach(() => {
    const mockStorage = {
      increment: vi.fn().mockResolvedValue({
        totalHits: 1,
        timeToExpire: 60,
        isBlocked: false,
        timeToBlockExpire: 0,
      }),
    } as unknown as ThrottlerStorage;

    const mockReflector = {
      get: vi.fn(),
      getAllAndOverride: vi.fn(),
    } as unknown as Reflector;

    const mockThrottlerOptions = {
      throttlers: [{ ttl: 60, limit: 5 }],
    } as unknown as ThrottlerModuleOptions;

    guard = new TestableThrottlerGuard(
      mockThrottlerOptions,
      mockStorage,
      mockReflector,
    );
  });

  it('should be defined', () => {
    expect(guard).toBeDefined();
  });

  it('should extract correct IP tracker from request', async () => {
    const tracker = await guard.track({ ip: '127.0.0.1' });

    expect(tracker).toBe('127.0.0.1');
  });
});
