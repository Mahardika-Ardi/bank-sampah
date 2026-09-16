import type { ConfigService } from '@nestjs/config';
import type { Response } from 'express';
import { ACCESS_TOKEN_COOKIE } from '../constants/auth.constants.js';

/** Stores the access JWT in an HTTP-only cookie. Token stays in the body too. */
export function setAccessTokenCookie(
  config: ConfigService,
  res: Response,
  token: string,
): void {
  const httpOnly = config.get<boolean>('cookie.httpOnly') ?? true;
  const secure = config.get<boolean>('cookie.secure') ?? false;
  const sameSite =
    config.get<'strict' | 'lax' | 'none'>('cookie.sameSite') ?? 'lax';

  res.cookie(ACCESS_TOKEN_COOKIE, token, {
    httpOnly,
    secure,
    sameSite,
    path: '/',
    maxAge: 60 * 60 * 1000,
  });
}
