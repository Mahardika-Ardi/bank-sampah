import { Prisma } from '../../../generated/prisma/client.js';

/** Public category row (audit columns excluded). */
export const kategoriDetailSelect = {
  id: true,
  namaKategori: true,
  hargaPerKg: true,
  poinPerKg: true,
  jenis: true,
  foto: true,
  photoStatus: true,
} as const satisfies Prisma.KategoriSampahSelect;

export const kategoriNameTakenSelect = {
  id: true,
} as const satisfies Prisma.KategoriSampahSelect;
