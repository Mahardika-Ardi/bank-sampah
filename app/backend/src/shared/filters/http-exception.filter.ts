import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { randomUUID } from 'crypto';

import { Prisma } from '../../../generated/prisma/client.js';
import { LoggerService } from '../../infra/logger/logger.service.js';
import { describePrismaError } from '../utils/prisma-error.utils.js';

type ErrorEnvelope = {
  statusCode: number;
  success: false;
  message: string;
  errors: unknown;
  timestamp: string;
  errorId: string;
};

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  constructor(private readonly logger: LoggerService) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const errorId = randomUUID();
    const route = `${request.method} ${request.url}`;

    if (exception instanceof HttpException) {
      const status = exception.getStatus();
      const body = exception.getResponse();
      const { message, errors } = this.normalizeHttpBody(body);
      this.send(response, errorId, route, status, message, errors);
      return;
    }

    if (exception instanceof Prisma.PrismaClientKnownRequestError) {
      const descriptor = describePrismaError(exception);
      this.logger.error(`Prisma [${exception.code}] ${route}`, exception.stack, {
        context: GlobalExceptionFilter.name,
        code: exception.code,
        errorId,
      });
      this.send(
        response,
        errorId,
        route,
        descriptor.status,
        descriptor.message,
        { code: descriptor.code, prismaCode: exception.code },
      );
      return;
    }

    if (
      exception instanceof Prisma.PrismaClientValidationError ||
      exception instanceof Prisma.PrismaClientUnknownRequestError
    ) {
      this.logger.error(
        `Prisma validation ${route}`,
        exception instanceof Error ? exception.stack : undefined,
        { context: GlobalExceptionFilter.name, errorId },
      );
      this.send(
        response,
        errorId,
        route,
        HttpStatus.BAD_REQUEST,
        'Invalid data',
        { code: 'VALIDATION' },
      );
      return;
    }

    if (
      exception instanceof Prisma.PrismaClientInitializationError ||
      exception instanceof Prisma.PrismaClientRustPanicError
    ) {
      this.logger.error(
        `Prisma unavailable ${route}`,
        exception instanceof Error ? exception.stack : undefined,
        { context: GlobalExceptionFilter.name, errorId },
      );
      this.send(
        response,
        errorId,
        route,
        HttpStatus.SERVICE_UNAVAILABLE,
        'Database not reachable',
        { code: 'DATABASE' },
      );
      return;
    }

    const err =
      exception instanceof Error ? exception : new Error(String(exception));
    this.logger.error(`Unexpected error ${route}`, err.stack, {
      context: GlobalExceptionFilter.name,
      errorId,
    });
    this.send(
      response,
      errorId,
      route,
      HttpStatus.INTERNAL_SERVER_ERROR,
      'Internal server error',
      null,
    );
  }

  private normalizeHttpBody(body: unknown): {
    message: string;
    errors: unknown;
  } {
    if (typeof body === 'string') {
      return { message: body, errors: null };
    }
    if (typeof body === 'object' && body !== null) {
      const record = body as Record<string, unknown>;
      const message = record.message;
      const errors = record.errors ?? null;
      if (typeof message === 'string') {
        return { message, errors };
      }
      if (Array.isArray(message)) {
        return { message: 'Validation failed', errors: message };
      }
    }
    return { message: 'Request failed', errors: null };
  }

  private send(
    response: Response,
    errorId: string,
    route: string,
    status: number,
    message: string,
    errors: unknown,
  ): void {
    if (status >= 500) {
      this.logger.error(`${status} ${route}`, undefined, {
        context: GlobalExceptionFilter.name,
        errorId,
      });
    } else {
      this.logger.warn(`${status} ${route}`, {
        context: GlobalExceptionFilter.name,
        errorId,
      });
    }

    const envelope: ErrorEnvelope = {
      statusCode: status,
      success: false,
      message,
      errors,
      timestamp: new Date().toISOString(),
      errorId,
    };
    response.status(status).json(envelope);
  }
}
