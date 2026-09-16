import type { UserRole } from '../../../generated/prisma/enums.js';

/**
 * Shape of the JWT payload signed by {@link AuthService} and validated by
 * {@link JwtStrategy}. Single source of truth — do not redeclare inline.
 *
 * - User login tokens carry `sub`, `username`, `role`, `tenantId`.
 * - App Maker tokens carry `sub`, `email`, `type: 'APP_MAKER'`, `tenantId`
 *   and have no `role`.
 */
export type JwtPayload = {
  sub: string;
  username?: string;
  email?: string;
  role?: UserRole;
  type?: string;
  tenantId: string;
};
