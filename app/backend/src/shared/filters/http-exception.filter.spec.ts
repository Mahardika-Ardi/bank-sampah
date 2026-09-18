import { describe, it, expect, beforeEach, vi, Mock } from 'vitest';
import { BadRequestException, HttpException, HttpStatus } from '@nestjs/common';
import type { Request, Response } from 'express';
import { GlobalExceptionFilter } from './http-exception.filter.js';
import { LoggerService } from '../../infra/logger/logger.service.js';
import { Prisma } from '../../../generated/prisma/client.js';

describe('GlobalExceptionFilter', () => {
  let filter: GlobalExceptionFilter;
  let mockLogger: { log: Mock; warn: Mock; error: Mock; debug: Mock };
  let mockJson: Mock;
  let mockStatus: Mock;
  let mockResponse: Pick<Response, 'status' | 'json'>;

  const mockRequest = {
    method: 'POST',
    url: '/api/v1/maker/register',
  } as Pick<Request, 'method' | 'url'>;

  const createHost = () => ({
    switchToHttp: () => ({
      getResponse: () => mockResponse,
      getRequest: () => mockRequest,
    }),
  });

  beforeEach(() => {
    mockLogger = {
      log: vi.fn(),
      warn: vi.fn(),
      error: vi.fn(),
      debug: vi.fn(),
    };
    mockJson = vi.fn();
    mockStatus = vi.fn().mockReturnValue({ json: mockJson });
    mockResponse = { status: mockStatus, json: mockJson } as Pick<
      Response,
      'status' | 'json'
    >;

    filter = new GlobalExceptionFilter(
      mockLogger as unknown as LoggerService,
    );
  });

  it('should be defined', () => {
    expect(filter).toBeDefined();
  });

  it('should normalize HttpException into the contract envelope', () => {
    filter.catch(
      new BadRequestException('Email is already registered.'),
      createHost() as never,
    );

    expect(mockStatus).toHaveBeenCalledWith(HttpStatus.BAD_REQUEST);
    expect(mockJson).toHaveBeenCalledWith(
      expect.objectContaining({
        statusCode: 400,
        success: false,
        message: 'Email is already registered.',
        errors: null,
        timestamp: expect.any(String),
        errorId: expect.any(String),
      }),
    );
  });

  it('should map validation arrays to message + errors', () => {
    const details = ['email must be an email', 'password is too short'];
    filter.catch(
      new HttpException(
        { message: details, error: 'Bad Request', statusCode: 400 },
        HttpStatus.BAD_REQUEST,
      ),
      createHost() as never,
    );

    expect(mockJson).toHaveBeenCalledWith(
      expect.objectContaining({
        statusCode: 400,
        message: 'Validation failed',
        errors: details,
      }),
    );
  });

  it('should map Prisma P2002 to 409 with a JSON body (hang regression)', () => {
    const prismaError = new Prisma.PrismaClientKnownRequestError(
      'Unique constraint failed',
      { code: 'P2002', clientVersion: '7.10.0' },
    );

    filter.catch(prismaError, createHost() as never);

    expect(mockStatus).toHaveBeenCalledWith(HttpStatus.CONFLICT);
    expect(mockJson).toHaveBeenCalledWith(
      expect.objectContaining({
        statusCode: 409,
        success: false,
        message: 'Data already exists',
        timestamp: expect.any(String),
        errorId: expect.any(String),
      }),
    );
  });

  it('should map unknown errors to a 500 envelope (hang regression)', () => {
    filter.catch(new Error('boom'), createHost() as never);

    expect(mockStatus).toHaveBeenCalledWith(
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
    expect(mockJson).toHaveBeenCalledWith(
      expect.objectContaining({
        statusCode: 500,
        success: false,
        message: 'Internal server error',
        errors: null,
      }),
    );
  });

  it('should map non-Error throws to a 500 envelope', () => {
    filter.catch('string failure', createHost() as never);

    expect(mockStatus).toHaveBeenCalledWith(
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
    expect(mockJson).toHaveBeenCalledTimes(1);
  });
});
