import { api } from "@/lib/api/client";
import type {
  AdminSetorRow,
  AdminStats,
  MyPenukaranRow,
  RekapBulanan,
  RekapFleksibel,
  SummaryPeriode,
} from "@/types/api";

export type RangeQuery = {
  periode?: SummaryPeriode;
  tanggal?: string;
  bulan?: string;
  tahun?: number;
};

function rangeSuffix(query: RangeQuery): string {
  const params = new URLSearchParams();
  if (query.periode) params.set("periode", query.periode);
  if (query.tanggal) params.set("tanggal", query.tanggal);
  if (query.bulan) params.set("bulan", query.bulan);
  if (query.tahun !== undefined) params.set("tahun", String(query.tahun));
  const suffix = params.toString();
  return suffix ? `?${suffix}` : "";
}

export function dashboardStats(query: RangeQuery = {}) {
  return api<AdminStats>(`/dashboard/stats${rangeSuffix(query)}`);
}

export function adminSetors(query: { status?: string; bulan?: string } = {}) {
  const params = new URLSearchParams();
  if (query.status) params.set("status", query.status);
  if (query.bulan) params.set("bulan", query.bulan);
  const suffix = params.toString();
  return api<AdminSetorRow[]>(
    `/setor-sampah/admin/list${suffix ? `?${suffix}` : ""}`,
  );
}

export function adminPenukaran() {
  return api<MyPenukaranRow[]>("/penukaran-poin/admin/list");
}

export type VerifyStatus = "selesai" | "diverifikasi" | "ditolak";

export function verifySetor(
  id: string,
  input: {
    status: VerifyStatus;
    catatanAdmin: string;
    itemsReal?: { kategoriSampahId: string; beratKgReal: number }[];
  },
) {
  return api<{ id: string; status: string }>(
    `/setor-sampah/admin/verify/${id}`,
    { method: "PUT", body: { ...input } },
  );
}

export function rekapBulanan(bulan: string) {
  return api<RekapBulanan>(
    `/rekapitulasi/bulanan?bulan=${encodeURIComponent(bulan)}`,
  );
}

export function rekapMingguan(tanggal: string) {
  return api<RekapFleksibel>(
    `/rekapitulasi/mingguan?tanggal=${encodeURIComponent(tanggal)}`,
  );
}

export function rekapTahunan(tahun: number) {
  return api<RekapFleksibel>(`/rekapitulasi/tahunan?tahun=${tahun}`);
}
