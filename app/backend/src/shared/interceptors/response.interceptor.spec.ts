import { describe, it, expect } from 'vitest';
import { ExecutionContext, CallHandler } from '@nestjs/common';
import { of, firstValueFrom } from 'rxjs';
import { ResponseInterceptor } from './response.interceptor.js';

describe('ResponseInterceptor', () => {
  const interceptor = new ResponseInterceptor();
  const mockExecutionContext = {} as ExecutionContext;

  it('should be defined', () => {
    expect(interceptor).toBeDefined();
  });

  it('should format raw data into standard API response format', async () => {
    const rawData = { id: 1, name: 'Waste Bank User' };
    const mockCallHandler: CallHandler = {
      handle: () => of(rawData),
    };

    const result$ = interceptor.intercept(
      mockExecutionContext,
      mockCallHandler,
    );

    const result = await firstValueFrom(
      result$ instanceof Promise ? await result$ : result$,
    );

    expect(result).toEqual({
      success: true,
      message: 'Request successful',
      data: rawData,
      timestamp: expect.any(String),
    });
  });

  it('should format structured controller response with custom message and data', async () => {
    const controllerResponse = {
      message: 'Data retrieved successfully',
      data: [{ id: 1 }],
    };
    const mockCallHandler: CallHandler = {
      handle: () => of(controllerResponse),
    };

    const result$ = interceptor.intercept(
      mockExecutionContext,
      mockCallHandler,
    );

    const result = await firstValueFrom(
      result$ instanceof Promise ? await result$ : result$,
    );

    expect(result).toEqual({
      success: true,
      message: 'Data retrieved successfully',
      data: [{ id: 1 }],
      timestamp: expect.any(String),
    });
  });
});
