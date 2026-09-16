import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { TenantService } from '../../modules/tenant/tenant.service.js';
import { APP_KEY_HEADER } from '../constants/tenant.constants.js';

@Injectable()
export class TenantMiddleware implements NestMiddleware {
  constructor(private readonly tenantService: TenantService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const publicPaths = ['/health', '/docs', '/docs-json', '/maker/register', '/maker/login', '/maker/check-key'];
    const isPublic = publicPaths.some((path) => req.originalUrl.includes(path));

    if (isPublic) {
      return next();
    }

    const appKey = req.headers[APP_KEY_HEADER] as string;

    if (!appKey) {
      throw new UnauthorizedException('x-app-key header is missing');
    }

    try {
      const tenant = await this.tenantService.findByAppKey(appKey);
      if (!tenant || !tenant.isActive) {
        throw new UnauthorizedException('Invalid or inactive x-app-key');
      }
      req.tenant = tenant;
      next();
    } catch {
      throw new UnauthorizedException('Invalid or inactive x-app-key');
    }
  }
}
