import { Prisma } from '../../../generated/prisma/client.js';

/** Public reward row (audit columns excluded). */
export const hadiahDetailSelect = {
  id: true,
  namaHadiah: true,
  poinDibutuhkan: true,
  stok: true,
  foto: true,
  photoStatus: true,
} as const satisfies Prisma.HadiahSelect;

export const hadiahNameTakenSelect = {
  id: true,
} as const satisfies Prisma.HadiahSelect;
