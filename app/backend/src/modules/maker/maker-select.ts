import { Prisma } from '../../../generated/prisma/client.js';

/** Maker account lookup for check-key (tenant + manager name included). */
export const makerLookupSelect = {
  id: true,
  username: true,
  tenantId: true,
  tenant: {
    select: {
      id: true,
      name: true,
      email: true,
      namaSiswa: true,
      kelas: true,
      appName: true,
      appKey: true,
    },
  },
  adminBank: {
    select: { namaPengelola: true },
  },
} as const satisfies Prisma.UserSelect;

export const makerEmailTakenSelect = {
  id: true,
} as const satisfies Prisma.UserSelect;

/**
 * EXCEPTION (allowlisted in the select-convention spec): carries
 * `password` for credential comparison in `loginMaker` only. The
 * response mapper drops it — it must never reach a response.
 */
export const makerLoginSelect = {
  ...makerLookupSelect,
  password: true,
} satisfies Prisma.UserSelect;
