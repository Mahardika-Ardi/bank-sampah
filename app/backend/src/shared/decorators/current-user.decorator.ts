import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { UserRole } from '../../../generated/prisma/enums.js';

type UserPayload = {
  id: string;
  emai: string;
  phone: string;
  role: UserRole;
};

export const CurrentUser = createParamDecorator(
  (data: keyof UserPayload, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request>();
    const user = request.user as UserPayload;

    if (!user) return null;

    return data ? user[data] : user;
  },
);
