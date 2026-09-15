import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { TenantService } from '../../modules/tenant/tenant.service.js';

declare global {
  namespace Express {
    interface Request {
      tenant?: any;
    }
  }
}

@Injectable()
export class TenantMiddleware implements NestMiddleware {
  constructor(private readonly tenantService: TenantService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    // Define public paths that do not require x-app-key header
    const publicPaths = ['/seed', '/health', '/docs', '/docs-json'];
    const isPublic = publicPaths.some((path) => req.originalUrl.includes(path));

    if (isPublic) {
      return next();
    }

    const appKey = req.headers['x-app-key'] as string;

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
