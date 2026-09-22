import { Prisma } from '../../../generated/prisma/client.js';

/** Active photo row for lifecycle decisions. */
export const mediaActiveSelect = {
  id: true,
  publicId: true,
} as const satisfies Prisma.MediaSelect;
