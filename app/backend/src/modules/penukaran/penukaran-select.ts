import { Prisma } from '../../../generated/prisma/client.js';

const hadiahRef = {
  select: { namaHadiah: true, poinDibutuhkan: true, foto: true },
} as const;

const nasabahRef = {
  select: { namaNasabah: true, telp: true },
} as const;

/** Customer history rows with reward snapshot. */
export const tukarHistorySelect = {
  id: true,
  kodePenukaran: true,
  tanggal: true,
  poinTerpakai: true,
  status: true,
  hadiah: hadiahRef,
} as const satisfies Prisma.PenukaranPoinSelect;

/** Admin list rows with customer + reward references. */
export const tukarAdminListSelect = {
  id: true,
  kodePenukaran: true,
  tanggal: true,
  poinTerpakai: true,
  status: true,
  nasabah: nasabahRef,
  hadiah: { select: { namaHadiah: true } },
} as const satisfies Prisma.PenukaranPoinSelect;

/** Printable receipt with full context. */
export const tukarReceiptSelect = {
  id: true,
  idNasabah: true,
  kodePenukaran: true,
  tanggal: true,
  poinTerpakai: true,
  status: true,
  nasabah: nasabahRef,
  hadiah: hadiahRef,
} as const satisfies Prisma.PenukaranPoinSelect;

/** Minimal profile reference for ownership checks. */
export const tukarOwnerSelect = {
  id: true,
} as const satisfies Prisma.NasabahSelect;

/** Minimal read for monthly code sequencing. */
export const tukarKodeSelect = {
  kodePenukaran: true,
} as const satisfies Prisma.PenukaranPoinSelect;

/** Reward row for redeem validation (price, stock). */
export const tukarHadiahSelect = {
  id: true,
  namaHadiah: true,
  poinDibutuhkan: true,
  stok: true,
} as const satisfies Prisma.HadiahSelect;

/** Redemption row for status transitions. */
export const tukarStatusSelect = {
  id: true,
  idNasabah: true,
  idHadiah: true,
  poinTerpakai: true,
  status: true,
} as const satisfies Prisma.PenukaranPoinSelect;
