import { describe, it, expect, beforeEach, vi } from 'vitest';
import { HttpLoggerMiddleware } from './http-logger.middleware.js';
import { LoggerService } from '../../infra/logger/logger.service.js';

describe('HttpLoggerMiddleware', () => {
  let middleware: HttpLoggerMiddleware;
  let mockLoggerService: Partial<LoggerService>;

  beforeEach(() => {
    mockLoggerService = {
      log: vi.fn(),
      warn: vi.fn(),
      error: vi.fn(),
    };

    middleware = new HttpLoggerMiddleware(mockLoggerService as LoggerService);
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
    } as any;

    const mockRes = {
      statusCode: 200,
      on: vi.fn((event, callback) => {
        if (event === 'finish') {
          callback();
        }
      }),
    } as any;

    const nextMock = vi.fn();

    middleware.use(mockReq, mockRes, nextMock);

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
    } as any;

    const mockRes = {
      statusCode: 200,
      on: vi.fn(),
    } as any;

    const nextMock = vi.fn();

    middleware.use(mockReq, mockRes, nextMock);

    expect(nextMock).toHaveBeenCalledOnce();
    expect(mockLoggerService.log).not.toHaveBeenCalled();
  });
});
