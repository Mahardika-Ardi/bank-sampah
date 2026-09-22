import { Prisma } from '../../../generated/prisma/client.js';

/** Tenant row for middleware resolution and profile reads. */
export const tenantDetailSelect = {
  id: true,
  appKey: true,
  name: true,
  email: true,
  namaSiswa: true,
  kelas: true,
  appName: true,
  isActive: true,
} as const satisfies Prisma.TenantSelect;

export const tenantAppKeyTakenSelect = {
  id: true,
} as const satisfies Prisma.TenantSelect;

/** Public bank row for the pre-login bank picker (safe columns only). */
export const tenantPublicSelect = {
  id: true,
  appName: true,
  name: true,
  appKey: true,
} as const satisfies Prisma.TenantSelect;

/** Request-scoped tenant identity resolved by TenantMiddleware. */
export type TenantContext = Prisma.TenantGetPayload<{
  select: typeof tenantDetailSelect;
}>;
