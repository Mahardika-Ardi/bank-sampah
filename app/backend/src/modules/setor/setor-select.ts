import { Prisma } from '../../../generated/prisma/client.js';

const kategoriRef = {
  select: { namaKategori: true, jenis: true, poinPerKg: true },
} as const;

const detailWithKategori = {
  select: {
    id: true,
    idKategori: true,
    beratKg: true,
    beratEstimasiKg: true,
    beratTerverifikasiKg: true,
    subtotalPoin: true,
    subtotalHarga: true,
    kategori: kategoriRef,
  },
} as const;

const nasabahRef = {
  select: { namaNasabah: true, alamat: true, telp: true },
} as const;

/** Customer history rows with category snapshots. */
export const setorHistorySelect = {
  id: true,
  kodeSetor: true,
  tanggal: true,
  status: true,
  totalBeratKg: true,
  totalPoin: true,
  catatan: true,
  detail: detailWithKategori,
} as const satisfies Prisma.SetorSampahSelect;

/** Admin list rows with customer reference. */
export const setorAdminListSelect = {
  id: true,
  kodeSetor: true,
  tanggal: true,
  status: true,
  totalBeratKg: true,
  totalPoin: true,
  nasabah: { select: { namaNasabah: true, telp: true } },
} as const satisfies Prisma.SetorSampahSelect;

/** Printable receipt with full context. */
export const setorReceiptSelect = {
  id: true,
  idNasabah: true,
  kodeSetor: true,
  tanggal: true,
  status: true,
  totalBeratKg: true,
  totalPoin: true,
  catatan: true,
  catatanAdmin: true,
  nasabah: nasabahRef,
  detail: detailWithKategori,
} as const satisfies Prisma.SetorSampahSelect;

export const setorIdOnlySelect = {
  id: true,
  idNasabah: true,
  status: true,
} as const satisfies Prisma.SetorSampahSelect;

/** Minimal profile reference for ownership checks. */
export const setorOwnerSelect = {
  id: true,
} as const satisfies Prisma.NasabahSelect;

/** Minimal read for monthly code sequencing. */
export const setorKodeSelect = {
  kodeSetor: true,
} as const satisfies Prisma.SetorSampahSelect;

export const setorAdminRefSelect = {
  id: true,
} as const satisfies Prisma.AdminBankSelect;

/** Category rates for point/price computation. */
export const setorRateSelect = {
  id: true,
  poinPerKg: true,
  hargaPerKg: true,
} as const satisfies Prisma.KategoriSampahSelect;

/** Deposit row for verification (details included for recompute). */
export const setorVerifySelect = {
  id: true,
  idNasabah: true,
  status: true,
  detail: {
    select: {
      id: true,
      idKategori: true,
      beratKg: true,
    },
  },
} as const satisfies Prisma.SetorSampahSelect;
