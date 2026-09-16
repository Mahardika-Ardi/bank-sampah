import { describe, it, expect, beforeEach, vi } from 'vitest';
import type { Request, Response, NextFunction } from 'express';
import { HttpLoggerMiddleware } from './http-logger.middleware.js';
import { LoggerService } from '../../infra/logger/logger.service.js';

describe('HttpLoggerMiddleware', () => {
  let middleware: HttpLoggerMiddleware;
  let mockLoggerService: Pick<LoggerService, 'log' | 'warn' | 'error'>;

  const mockNext = () => vi.fn() as unknown as NextFunction;

  beforeEach(() => {
    mockLoggerService = {
      log: vi.fn(),
      warn: vi.fn(),
      error: vi.fn(),
    };

    middleware = new HttpLoggerMiddleware(
      mockLoggerService as unknown as LoggerService,
    );
  });

  it('should be defined', () => {
    expect(middleware).toBeDefined();
  });

  it('should log successful requests and call next()', () => {
    const mockReq = {
      method: 'GET',
      originalUrl: '/api/health',
      ip: '127.0.0.1',
      get: vi.fn().mockReturnValue('Mozilla/5.0'),
    } as Pick<Request, 'method' | 'originalUrl' | 'ip' | 'get'>;

    const mockRes = {
      statusCode: 200,
      on: vi.fn((event: string, callback: () => void) => {
        if (event === 'finish') {
          callback();
        }
        return mockRes;
      }),
    } as unknown as Pick<Response, 'statusCode' | 'on'>;

    const nextMock = mockNext();

    middleware.use(mockReq as Request, mockRes as Response, nextMock);

    expect(nextMock).toHaveBeenCalledOnce();
    expect(mockLoggerService.log).toHaveBeenCalledWith(
      'GET /api/health 200',
      expect.objectContaining({
        method: 'GET',
        url: '/api/health',
        statusCode: 200,
      }),
    );
  });

  it('should skip logging for favicon.ico', () => {
    const mockReq = {
      method: 'GET',
      originalUrl: '/favicon.ico',
      ip: '127.0.0.1',
      get: vi.fn(),
    } as Pick<Request, 'method' | 'originalUrl' | 'ip' | 'get'>;

    const mockRes = {
      statusCode: 200,
      on: vi.fn(),
    } as Pick<Response, 'statusCode' | 'on'>;

    const nextMock = mockNext();

    middleware.use(mockReq as Request, mockRes as Response, nextMock);

    expect(nextMock).toHaveBeenCalledOnce();
    expect(mockLoggerService.log).not.toHaveBeenCalled();
  });
});
