import { Prisma } from '../../../generated/prisma/client.js';

/**
 * API-facing + auth reads for the auth module.
 *
 * EXCEPTION (allowlisted in the select-convention spec): `userLoginSelect`
 * carries `password` because credential comparison needs the hash. It is
 * used only inside `AuthService.login`, and the response mapper drops it —
 * `password` must never reach a response.
 */
const userProfileBase = {
  id: true,
  username: true,
  role: true,
  tenantId: true,
  nasabah: {
    select: {
      id: true,
      namaNasabah: true,
      alamat: true,
      telp: true,
      saldoPoin: true,
      foto: true,
    },
  },
  adminBank: {
    select: {
      id: true,
      namaUnit: true,
      namaPengelola: true,
      telp: true,
    },
  },
} as const;

export const userProfileSelect =
  userProfileBase satisfies Prisma.UserSelect;

export const userLoginSelect = {
  ...userProfileBase,
  password: true,
} satisfies Prisma.UserSelect;

export const usernameTakenSelect = {
  id: true,
} as const satisfies Prisma.UserSelect;
