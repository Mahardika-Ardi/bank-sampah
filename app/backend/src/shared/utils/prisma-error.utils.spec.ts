import { describe, it, expect } from 'vitest';
import { HttpStatus } from '@nestjs/common';
import { describePrismaError } from './prisma-error.utils.js';
import { Prisma } from '../../../generated/prisma/client.js';

describe('describePrismaError', () => {
  const knownError = (code: string) =>
    new Prisma.PrismaClientKnownRequestError('Database error', {
      code,
      clientVersion: '7.10.0',
    });

  it('should map P2002 to 409 CONFLICT', () => {
    expect(describePrismaError(knownError('P2002'))).toEqual({
      status: HttpStatus.CONFLICT,
      code: 'CONFLICT',
      message: 'Data already exists',
    });
  });

  it('should map P2025 to 404 NOT_FOUND', () => {
    expect(describePrismaError(knownError('P2025'))).toEqual({
      status: HttpStatus.NOT_FOUND,
      code: 'NOT_FOUND',
      message: 'Data not found',
    });
  });

  it('should map P1001 to 503 SERVICE_UNAVAILABLE', () => {
    expect(describePrismaError(knownError('P1001'))).toEqual({
      status: HttpStatus.SERVICE_UNAVAILABLE,
      code: 'DATABASE',
      message: 'Database not reachable',
    });
  });

  it('should map P2003 to 400 CONSTRAINT', () => {
    expect(describePrismaError(knownError('P2003'))).toEqual({
      status: HttpStatus.BAD_REQUEST,
      code: 'CONSTRAINT',
      message: 'Foreign key constraint failed',
    });
  });

  it('should fall back to 500 UNKNOWN for unmapped codes', () => {
    expect(describePrismaError(knownError('P9999'))).toEqual({
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      code: 'UNKNOWN',
      message: 'Internal server error',
    });
  });
});
