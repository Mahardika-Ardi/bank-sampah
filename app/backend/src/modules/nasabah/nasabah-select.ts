import { Prisma } from '../../../generated/prisma/client.js';

/** Duplicate-username probe (existence only). */
export const usernameTakenSelect = {
  id: true,
} as const satisfies Prisma.UserSelect;

const userRef = {
  select: { username: true, role: true },
} as const;

/** Full customer row for list/detail responses. */
export const nasabahDetailSelect = {
  id: true,
  namaNasabah: true,
  alamat: true,
  telp: true,
  saldoPoin: true,
  foto: true,
  photoStatus: true,
  tanggalLahir: true,
  user: userRef,
} as const satisfies Prisma.NasabahSelect;
