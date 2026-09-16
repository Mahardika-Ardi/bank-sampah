import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { UserRole } from '../../../../generated/prisma/enums.js';
import { PUBLIC_KEY } from '../../../shared/decorators/public.decorator.js';
import { ROLE_KEY } from '../../../shared/decorators/role.decorator.js';
import type { JwtPayload } from '../../../shared/types/jwt-payload.type.js';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const isPublic = this.reflector.getAllAndOverride<boolean>(PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) return true;

    const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(ROLE_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) return true;

    const request = context.switchToHttp().getRequest<Request>();
    const user = request.user as JwtPayload | undefined;

    if (!user) {
      throw new UnauthorizedException();
    }
    if (!user.role || !requiredRoles.includes(user.role)) {
      throw new ForbiddenException(
        'You are not allowed to access this resource',
      );
    }

    return true;
  }
}
