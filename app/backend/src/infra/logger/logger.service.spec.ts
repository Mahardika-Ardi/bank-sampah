import { Test, TestingModule } from '@nestjs/testing';
import { LoggerService } from './logger.service.js';
import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoggerService],
    }).compile();

    service = module.get<LoggerService>(LoggerService);
    vi.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should allow setting a context', () => {
    const scopedLogger = service.setContext('TestContext');
    expect(scopedLogger).toBeDefined();
    expect(scopedLogger).toBeInstanceOf(LoggerService);
  });

  it('should execute log methods without throwing', () => {
    expect(() => service.log('Test log message', 'TestContext')).not.toThrow();
    expect(() =>
      service.error('Test error message', 'stack-trace', 'TestContext'),
    ).not.toThrow();
    expect(() =>
      service.warn('Test warning message', 'TestContext'),
    ).not.toThrow();
    expect(() =>
      service.debug('Test debug message', 'TestContext'),
    ).not.toThrow();
    expect(() =>
      service.verbose('Test verbose message', 'TestContext'),
    ).not.toThrow();
  });
});
