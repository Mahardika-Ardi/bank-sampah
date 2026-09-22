"use client";

import { useState } from "react";
import BalanceHero from "@/components/dashboard/BalanceHero";
import LatestDepositCard from "@/components/dashboard/LatestDepositCard";
import LatestRedemptionCard from "@/components/dashboard/LatestRedemptionCard";
import PeriodPicker from "@/components/dashboard/PeriodPicker";
import StatTrio from "@/components/dashboard/StatTrio";
import { FormError } from "@/components/form/fields";
import { SkeletonCard } from "@/components/ui/Skeleton";
import { useDashboardSummary } from "@/hooks/dashboard/useDashboardSummary";
import { useMyPenukaran } from "@/hooks/penukaran/useMyPenukaran";
import { useMySetor } from "@/hooks/setor/useMySetor";
import { useProfile } from "@/hooks/auth/useProfile";
import { currentMonth, greeting } from "@/lib/constants/format";

export default function DashboardPage() {
  const [bulan, setBulan] = useState(currentMonth);
  const { data, error, loading, retry } = useDashboardSummary(bulan);
  const { rows: setors } = useMySetor(bulan);
  const { rows: tukars } = useMyPenukaran();
  const { profile } = useProfile();

  const firstName =
    profile?.nasabah?.namaNasabah?.split(" ")[0] ?? profile?.username ?? "";
  const latestSetor =
    (data?.transaksiTerakhirSetor
      ? (setors?.find(
          (row) => row.kodeSetor === data.transaksiTerakhirSetor?.kodeSetor,
        ) ?? null)
      : null) ?? null;
  const latestTukar =
    (data?.transaksiTerakhirTukar
      ? (tukars?.find(
          (row) =>
            row.kodePenukaran === data.transaksiTerakhirTukar?.kodePenukaran,
        ) ?? null)
      : null) ?? null;

  return (
    <div className="w-full space-y-6 pb-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
        <div className="space-y-1">
          <p className="text-xs font-bold uppercase tracking-wider text-muted">
            Portal Warga Peduli Lingkungan
          </p>
          <h1 className="font-display font-extrabold text-3xl text-ink tracking-tight">
            {greeting()}
            {firstName ? `, ${firstName}` : ""}!
          </h1>
          <p className="text-sm text-ink/60">
            Lacak timbangan berkala, kumpulkan poin hijau, dan wujudkan
            lingkungan bersih berkelanjutan.
          </p>
        </div>
        <PeriodPicker bulan={bulan} onChange={setBulan} />
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      ) : null}
      {error ? (
        <div className="rounded-2xl bg-card p-6 shadow-sm">
          <FormError message={error} />
          <button
            type="button"
            onClick={retry}
            className="mt-3 px-5 py-2.5 rounded-full bg-eco hover:bg-eco-deep text-white text-sm font-bold transition-colors"
          >
            Coba Lagi
          </button>
        </div>
      ) : null}
      {data ? (
        <>
          <BalanceHero saldo={data.saldoPoinSaatIni} />
          <StatTrio
            totalKg={data.totalSampahDisetorKg}
            poinDidapat={data.totalPoinDidapat}
            poinDitukar={data.totalPoinDitukar}
          />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8">
              <LatestDepositCard row={latestSetor} />
            </div>
            <div className="lg:col-span-4">
              <LatestRedemptionCard row={latestTukar} />
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
