import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';
import type { JwtPayload } from '../../../shared/types/jwt-payload.type.js';
import { ACCESS_TOKEN_COOKIE } from '../../../shared/constants/auth.constants.js';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        ExtractJwt.fromAuthHeaderAsBearerToken(),
        (req: Request) =>
          (req?.cookies?.[ACCESS_TOKEN_COOKIE] as string) ?? null,
      ]),
      ignoreExpiration: false,
      secretOrKey: config.getOrThrow<string>('auth.jwtSecret'),
      passReqToCallback: true,
    });
  }

  async validate(_req: Request, payload: JwtPayload) {
    return payload;
  }
}
