import type { ConfigService } from '@nestjs/config';
import type { Response } from 'express';
import { ACCESS_TOKEN_COOKIE } from '../constants/auth.constants.js';

function cookieOptions(config: ConfigService, maxAge: number) {
  const httpOnly = config.get<boolean>('cookie.httpOnly') ?? true;
  const secure = config.get<boolean>('cookie.secure') ?? false;
  const sameSite =
    config.get<'strict' | 'lax' | 'none'>('cookie.sameSite') ?? 'lax';
  const domain = config.get<string>('cookie.domain') || undefined;
  return { httpOnly, secure, sameSite, path: '/', maxAge, domain };
}

/** Stores the access JWT in an HTTP-only cookie. Token stays in the body too. */
export function setAccessTokenCookie(
  config: ConfigService,
  res: Response,
  token: string,
): void {
  res.cookie(
    ACCESS_TOKEN_COOKIE,
    token,
    cookieOptions(config, 60 * 60 * 1000),
  );
}

/** Stores the refresh JWT in an HTTP-only cookie scoped to auth routes. */
export function setRefreshTokenCookie(
  config: ConfigService,
  res: Response,
  token: string,
): void {
  const name =
    config.get<string>('cookie.refreshTokenName') ?? 'refresh_token';
  res.cookie(
    name,
    token,
    cookieOptions(config, 7 * 24 * 60 * 60 * 1000),
  );
}

/** Refresh cookie name configured for this deployment. */
export function refreshCookieName(config: ConfigService): string {
  return config.get<string>('cookie.refreshTokenName') ?? 'refresh_token';
}
