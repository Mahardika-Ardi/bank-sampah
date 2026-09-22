import { Prisma } from '../../../generated/prisma/client.js';

/** Narrow reads for report aggregations (no audit columns, no relations). */
export const reportDetailSelect = {
  beratTerverifikasiKg: true,
  beratKg: true,
  subtotalHarga: true,
  subtotalPoin: true,
  kategori: { select: { jenis: true } },
} as const satisfies Prisma.DetailSetorSelect;

export const reportSetorSumSelect = {
  totalBeratKg: true,
  totalPoin: true,
} as const satisfies Prisma.SetorSampahSelect;

export const reportTukarSumSelect = {
  poinTerpakai: true,
} as const satisfies Prisma.PenukaranPoinSelect;

export const reportBalanceSelect = {
  id: true,
  saldoPoin: true,
} as const satisfies Prisma.NasabahSelect;

/** Customer deposit rows for summary totals. */
export const reportSetorRowSelect = {
  kodeSetor: true,
  tanggal: true,
  totalBeratKg: true,
  totalPoin: true,
  status: true,
} as const satisfies Prisma.SetorSampahSelect;

/** Customer redemption rows for summary totals. */
export const reportTukarRowSelect = {
  kodePenukaran: true,
  tanggal: true,
  poinTerpakai: true,
  status: true,
  hadiah: { select: { namaHadiah: true } },
} as const satisfies Prisma.PenukaranPoinSelect;
