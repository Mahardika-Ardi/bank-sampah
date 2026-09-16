import type { JwtPayload } from './jwt-payload.type.js';
import type { Tenant } from '../../../generated/prisma/client.js';

declare global {
  namespace Express {
    // Passport types `Request.user` as `Express.User`; extend it with our
    // JWT shape instead of redeclaring the property (which conflicts).
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface User extends JwtPayload {}
    interface Request {
      /** Resolved by TenantMiddleware for all non-public routes. */
      tenant?: Tenant;
    }
  }
}
