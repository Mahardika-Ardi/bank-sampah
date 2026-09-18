import { HttpStatus } from '@nestjs/common';
import { Prisma } from '../../../generated/prisma/client.js';

export type PrismaErrorDescriptor = {
  status: HttpStatus;
  code: string;
  message: string;
};

const DESCRIPTORS: Record<string, PrismaErrorDescriptor> = {
  P1000: {
    status: HttpStatus.UNAUTHORIZED,
    code: 'DATABASE',
    message: 'Invalid database credentials',
  },
  P1001: {
    status: HttpStatus.SERVICE_UNAVAILABLE,
    code: 'DATABASE',
    message: 'Database not reachable',
  },
  P1002: {
    status: HttpStatus.GATEWAY_TIMEOUT,
    code: 'DATABASE',
    message: 'Database timeout',
  },
  P1003: {
    status: HttpStatus.NOT_FOUND,
    code: 'DATABASE',
    message: 'Database not found',
  },
  P1008: {
    status: HttpStatus.GATEWAY_TIMEOUT,
    code: 'DATABASE',
    message: 'Query timeout',
  },
  P1010: {
    status: HttpStatus.FORBIDDEN,
    code: 'DATABASE',
    message: 'Database access denied',
  },
  P1017: {
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    code: 'DATABASE',
    message: 'Database connection closed',
  },
  P2000: {
    status: HttpStatus.BAD_REQUEST,
    code: 'VALIDATION',
    message: 'Value too long',
  },
  P2001: {
    status: HttpStatus.NOT_FOUND,
    code: 'NOT_FOUND',
    message: 'Data not found',
  },
  P2025: {
    status: HttpStatus.NOT_FOUND,
    code: 'NOT_FOUND',
    message: 'Data not found',
  },
  P2002: {
    status: HttpStatus.CONFLICT,
    code: 'CONFLICT',
    message: 'Data already exists',
  },
  P2003: {
    status: HttpStatus.BAD_REQUEST,
    code: 'CONSTRAINT',
    message: 'Foreign key constraint failed',
  },
  P2004: {
    status: HttpStatus.BAD_REQUEST,
    code: 'CONSTRAINT',
    message: 'Constraint failed',
  },
  P2005: {
    status: HttpStatus.BAD_REQUEST,
    code: 'VALIDATION',
    message: 'Invalid data',
  },
  P2006: {
    status: HttpStatus.BAD_REQUEST,
    code: 'VALIDATION',
    message: 'Invalid data',
  },
  P2007: {
    status: HttpStatus.BAD_REQUEST,
    code: 'VALIDATION',
    message: 'Invalid data',
  },
  P2008: {
    status: HttpStatus.BAD_REQUEST,
    code: 'QUERY',
    message: 'Query error',
  },
  P2009: {
    status: HttpStatus.BAD_REQUEST,
    code: 'QUERY',
    message: 'Query error',
  },
  P2010: {
    status: HttpStatus.BAD_REQUEST,
    code: 'QUERY',
    message: 'Raw query failed',
  },
  P2011: {
    status: HttpStatus.BAD_REQUEST,
    code: 'VALIDATION',
    message: 'Null constraint violation',
  },
  P2012: {
    status: HttpStatus.BAD_REQUEST,
    code: 'VALIDATION',
    message: 'Missing required data',
  },
  P2013: {
    status: HttpStatus.BAD_REQUEST,
    code: 'VALIDATION',
    message: 'Missing required data',
  },
  P2014: {
    status: HttpStatus.BAD_REQUEST,
    code: 'CONSTRAINT',
    message: 'Relation error',
  },
  P2017: {
    status: HttpStatus.BAD_REQUEST,
    code: 'CONSTRAINT',
    message: 'Relation error',
  },
  P2015: {
    status: HttpStatus.NOT_FOUND,
    code: 'NOT_FOUND',
    message: 'Related data not found',
  },
  P2016: {
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    code: 'QUERY',
    message: 'Query interpretation error',
  },
  P2028: {
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    code: 'TRANSACTION',
    message: 'Transaction failed',
  },
  P2034: {
    status: HttpStatus.CONFLICT,
    code: 'CONFLICT',
    message: 'Deadlock detected',
  },
};

/**
 * Maps a Prisma known-request error to an HTTP descriptor.
 * Pure function — returns a value, never throws.
 */
export function describePrismaError(
  error: Prisma.PrismaClientKnownRequestError,
): PrismaErrorDescriptor {
  return (
    DESCRIPTORS[error.code] ?? {
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      code: 'UNKNOWN',
      message: 'Internal server error',
    }
  );
}
