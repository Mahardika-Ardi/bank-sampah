import { api } from "@/lib/api/client";
import type { DashboardSummary, SummaryPeriode } from "@/types/api";

export type SummaryQuery = {
  periode?: SummaryPeriode;
  tanggal?: string;
  bulan?: string;
  tahun?: number;
};

export function dashboardSummary(query: SummaryQuery = {}) {
  const params = new URLSearchParams();
  if (query.periode) params.set("periode", query.periode);
  if (query.tanggal) params.set("tanggal", query.tanggal);
  if (query.bulan) params.set("bulan", query.bulan);
  if (query.tahun !== undefined) params.set("tahun", String(query.tahun));
  const suffix = params.toString();
  return api<DashboardSummary>(
    `/dashboard/summary${suffix ? `?${suffix}` : ""}`,
  );
}
