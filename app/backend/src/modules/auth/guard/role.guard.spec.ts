import { Test, TestingModule } from '@nestjs/testing';
import { Reflector } from '@nestjs/core';
import {
  ExecutionContext,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { RolesGuard } from './role.guard.js';
import { UserRole } from '../../../../generated/prisma/enums.js';
import type { JwtPayload } from '../../../shared/types/jwt-payload.type.js';
import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('RolesGuard', () => {
  let guard: RolesGuard;
  let reflector: Reflector;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RolesGuard,
        {
          provide: Reflector,
          useValue: {
            getAllAndOverride: vi.fn(),
          },
        },
      ],
    }).compile();

    guard = module.get<RolesGuard>(RolesGuard);
    reflector = module.get<Reflector>(Reflector);
  });

  const createMockContext = (user?: JwtPayload): ExecutionContext => {
    return {
      switchToHttp: () => ({
        getRequest: () => ({
          user,
        }),
      }),
      getHandler: () => {},
      getClass: () => {},
    } as unknown as ExecutionContext;
  };

  it('should be defined', () => {
    expect(guard).toBeDefined();
  });

  it('should allow access if route is public', () => {
    vi.spyOn(reflector, 'getAllAndOverride').mockReturnValueOnce(true); // isPublic = true
    const context = createMockContext();

    const result = guard.canActivate(context);
    expect(result).toBe(true);
  });

  it('should allow access if no roles are required', () => {
    vi.spyOn(reflector, 'getAllAndOverride')
      .mockReturnValueOnce(false) // isPublic = false
      .mockReturnValueOnce(undefined); // requiredRoles = undefined

    const context = createMockContext();

    const result = guard.canActivate(context);
    expect(result).toBe(true);
  });

  it('should throw UnauthorizedException if user is missing on protected route', () => {
    vi.spyOn(reflector, 'getAllAndOverride')
      .mockReturnValueOnce(false)
      .mockReturnValueOnce([UserRole.admin_bank]);

    const context = createMockContext(undefined);

    expect(() => guard.canActivate(context)).toThrow(UnauthorizedException);
  });

  it('should throw ForbiddenException if user does not have required role', () => {
    vi.spyOn(reflector, 'getAllAndOverride')
      .mockReturnValueOnce(false)
      .mockReturnValueOnce([UserRole.admin_bank]);

    const user = { sub: '1', role: UserRole.nasabah, tenantId: 't-1' };
    const context = createMockContext(user);

    expect(() => guard.canActivate(context)).toThrow(ForbiddenException);
  });

  it('should allow access if user has the required role', () => {
    vi.spyOn(reflector, 'getAllAndOverride')
      .mockReturnValueOnce(false)
      .mockReturnValueOnce([UserRole.admin_bank]);

    const user = { sub: '1', role: UserRole.admin_bank, tenantId: 't-1' };
    const context = createMockContext(user);

    const result = guard.canActivate(context);
    expect(result).toBe(true);
  });
});
