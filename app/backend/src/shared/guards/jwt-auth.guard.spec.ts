import { describe, it, expect } from 'vitest';
import { UnauthorizedException } from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard.js';

describe('JwtAuthGuard', () => {
  const guard = new JwtAuthGuard();

  it('should be defined', () => {
    expect(guard).toBeDefined();
  });

  it('should return the user if authentication succeeds', () => {
    const mockUser = { id: 'user-uuid', email: 'test@example.com' };
    const result = guard.handleRequest(null, mockUser);

    expect(result).toEqual(mockUser);
  });

  it('should throw UnauthorizedException if an error occurs', () => {
    expect(() => {
      guard.handleRequest(new Error('Some auth error'), null);
    }).toThrow(UnauthorizedException);
  });

  it('should throw UnauthorizedException if no user is found', () => {
    expect(() => {
      guard.handleRequest(null, null);
    }).toThrow(UnauthorizedException);
  });
});
