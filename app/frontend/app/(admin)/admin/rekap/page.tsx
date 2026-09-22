"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { RekapStatCards, BreakdownBars } from "@/components/admin/RekapSections";
import { FormError } from "@/components/form/fields";
import { Skeleton } from "@/components/ui/Skeleton";
import { currentMonth, formatDate, formatInt, formatKg, formatMonth, formatRp } from "@/lib/constants/format";
import { useAdminPenukaran } from "@/hooks/admin/useAdminPenukaran";
import {
  useRekapBulanan,
  useRekapMingguan,
  useRekapTahunan,
} from "@/hooks/admin/useRekap";
import type { RekapBody } from "@/types/api";

type Tab = "bulanan" | "mingguan" | "tahunan";

function monthAnchors(bulan: string): string[] {
  return [1, 8, 15, 22].map(
    (day) => `${bulan}-${String(day).padStart(2, "0")}`,
  );
}

function anchorEnd(anchor: string): string {
  const date = new Date(`${anchor}T00:00:00`);
  const end = new Date(date);
  end.setDate(date.getDate() + 6);
  return `${formatDate(anchor)} – ${formatDate(end.toISOString().slice(0, 10))}`;
}

function todayInput(): string {
  return new Date().toISOString().slice(0, 10);
}

function WeeklyTable({ bulan }: { bulan: string }) {
  const anchors = useMemo(() => monthAnchors(bulan), [bulan]);
  const w1 = useRekapMingguan(anchors[0]);
  const w2 = useRekapMingguan(anchors[1]);
  const w3 = useRekapMingguan(anchors[2]);
  const w4 = useRekapMingguan(anchors[3]);
  const weeks = [w1, w2, w3, w4];
  const loading = weeks.some((w) => !w.data && !w.error);
  const error = weeks.find((w) => w.error)?.error ?? null;

  if (loading) {
    return (
      <div className="space-y-3">
        <Skeleton className="h-12" />
        <Skeleton className="h-12" />
      </div>
    );
  }
  if (error) return <FormError message={error} />;

  const rows = weeks.map((w, i) => ({ body: w.data as RekapBody, i }));
  const totals = rows.reduce(
    (sum, r) => ({
      kg: sum.kg + r.body.rekapitulasiTonase.totalKg,
      rp: sum.rp + r.body.rekapitulasiTonase.totalEstimasiPembayaranRupiah,
      poin: sum.poin + r.body.rekapitulasiTonase.totalPoinDiterbitkan,
    }),
    { kg: 0, rp: 0, poin: 0 },
  );

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm min-w-xl">
        <thead>
          <tr className="text-left text-[11px] uppercase tracking-wider text-ink/50 border-b border-ink/10">
            <th className="py-2 pr-3 font-bold">Pekan</th>
            <th className="py-2 pr-3 font-bold">Periode Tanggal</th>
            <th className="py-2 pr-3 font-bold text-right">Tonase (Kg)</th>
            <th className="py-2 pr-3 font-bold text-right">Estimasi (Rp)</th>
            <th className="py-2 font-bold text-right">Poin Diterbitkan</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ body, i }) => (
            <tr key={anchors[i]} className="border-b border-ink/5 last:border-0">
              <td className="py-2.5 pr-3 font-bold text-ink">Pekan {i + 1}</td>
              <td className="py-2.5 pr-3 text-ink/60 text-xs whitespace-nowrap">
                {anchorEnd(anchors[i])}
              </td>
              <td className="py-2.5 pr-3 text-right tabular-nums">
                {formatKg(body.rekapitulasiTonase.totalKg)}
              </td>
              <td className="py-2.5 pr-3 text-right tabular-nums text-success">
                {formatRp(body.rekapitulasiTonase.totalEstimasiPembayaranRupiah)}
              </td>
              <td className="py-2.5 text-right font-bold text-eco tabular-nums">
                {formatInt(body.rekapitulasiTonase.totalPoinDiterbitkan)}
              </td>
            </tr>
          ))}
          <tr className="font-bold">
            <td className="py-2.5 pr-3 text-ink" colSpan={2}>
              Akumulasi {formatMonth(bulan)}
            </td>
            <td className="py-2.5 pr-3 text-right tabular-nums">
              {formatKg(totals.kg)}
            </td>
            <td className="py-2.5 pr-3 text-right tabular-nums text-success">
              {formatRp(totals.rp)}
            </td>
            <td className="py-2.5 text-right tabular-nums text-eco">
              {formatInt(totals.poin)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Distribution() {
  const { rows } = useAdminPenukaran();
  const top = useMemo(() => {
    if (!rows) return null;
    const grouped = new Map<string, { count: number; poin: number }>();
    for (const row of rows) {
      const name = row.hadiah.namaHadiah;
      const entry = grouped.get(name) ?? { count: 0, poin: 0 };
      entry.count += 1;
      entry.poin += row.poinTerpakai;
      grouped.set(name, entry);
    }
    return [...grouped.entries()]
      .sort((a, b) => b[1].poin - a[1].poin)
      .slice(0, 6);
  }, [rows]);

  return (
    <section className="rounded-2xl bg-card p-6 shadow-sm">
      <h2 className="font-display font-bold text-lg text-ink">
        Distribusi Hadiah &amp; Kas
      </h2>
      <p className="text-xs text-ink/60 mb-4">
        Agregat seluruh riwayat penukaran per jenis hadiah.
      </p>
      {!top ? (
        <p className="text-sm text-ink/60">Memuat…</p>
      ) : top.length > 0 ? (
        <ul className="space-y-2.5">
          {top.map(([name, entry]) => (
            <li
              key={name}
              className="flex items-center justify-between gap-2 p-3 rounded-xl bg-sand/60 text-sm"
            >
              <span className="font-semibold text-ink truncate">{name}</span>
              <span className="tabular-nums text-ink/70 whitespace-nowrap">
                {formatInt(entry.count)} klaim •{" "}
                <strong className="text-eco">
                  {formatInt(entry.poin)} Poin
                </strong>
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-ink/60">Belum ada penukaran tercatat.</p>
      )}
    </section>
  );
}

export default function RekapPage() {
  const [tab, setTab] = useState<Tab>("bulanan");
  const [bulan, setBulan] = useState(currentMonth);
  const [tanggal, setTanggal] = useState(todayInput);
  const [tahun, setTahun] = useState(new Date().getFullYear());

  const bulanan = useRekapBulanan(tab === "bulanan" ? bulan : null);
  const mingguan = useRekapMingguan(tab === "mingguan" ? tanggal : null);
  const tahunan = useRekapTahunan(tab === "tahunan" ? tahun : null);

  const body: RekapBody | null =
    tab === "bulanan" ? bulanan.data : tab === "mingguan" ? mingguan.data : tahunan.data;
  const error =
    tab === "bulanan" ? bulanan.error : tab === "mingguan" ? mingguan.error : tahunan.error;

  return (
    <div className="w-full space-y-6 pb-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
        <div className="space-y-1">
          <p className="text-xs font-bold uppercase tracking-wider text-muted">
            Admin Bank • Rekapitulasi
          </p>
          <h1 className="font-display font-extrabold text-3xl text-ink tracking-tight">
            Rekapitulasi &amp; Laporan Tonase Bank Sampah
          </h1>
          <p className="text-sm text-ink/60">
            Agregat pemilahan sampah dan distribusi insentif unit Anda.
          </p>
        </div>
        <Link
          href="/admin/hadiah"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold hover:bg-peach text-ink text-sm font-bold transition-colors self-start"
        >
          <Icon name="inventory_2" size="sm" />
          Kelola Sembako
        </Link>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {(
          [
            ["bulanan", "Bulanan"],
            ["mingguan", "Mingguan (Senin–Ahad)"],
            ["tahunan", "Tahunan"],
          ] as [Tab, string][]
        ).map(([value, label]) => (
          <button
            key={value}
            type="button"
            onClick={() => setTab(value)}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
              tab === value
                ? "bg-eco text-white"
                : "bg-card text-ink hover:bg-peach/50"
            }`}
          >
            {label}
          </button>
        ))}
        <span className="flex-1" />
        {tab === "bulanan" ? (
          <label className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-sm text-sm font-bold text-ink">
            <Icon name="calendar_today" size="sm" className="text-eco" />
            {formatMonth(bulan)}
            <input
              type="month"
              aria-label="Pilih bulan"
              value={bulan}
              onChange={(event) => {
                if (event.target.value) setBulan(event.target.value);
              }}
              className="sr-only"
            />
          </label>
        ) : null}
        {tab === "mingguan" ? (
          <label className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-sm text-sm font-bold text-ink">
            <Icon name="calendar_today" size="sm" className="text-eco" />
            {formatDate(tanggal)}
            <input
              type="date"
              aria-label="Pilih tanggal acuan pekan"
              value={tanggal}
              onChange={(event) => {
                if (event.target.value) setTanggal(event.target.value);
              }}
              className="sr-only"
            />
          </label>
        ) : null}
        {tab === "tahunan" ? (
          <label className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-sm text-sm font-bold text-ink">
            <Icon name="calendar_today" size="sm" className="text-eco" />
            <input
              type="number"
              aria-label="Pilih tahun"
              min="2020"
              max="2100"
              value={tahun}
              onChange={(event) => {
                const value = Number(event.target.value);
                if (Number.isInteger(value) && value > 0) setTahun(value);
              }}
              className="w-20 bg-transparent outline-none tabular-nums"
            />
          </label>
        ) : null}
      </div>

      {!body && !error ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <SkeletonCardWide />
        </div>
      ) : null}
      {error ? (
        <div className="rounded-2xl bg-card p-6 shadow-sm">
          <FormError message={error} />
        </div>
      ) : null}
      {body ? (
        <>
          <RekapStatCards body={body} />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <section className="lg:col-span-7 rounded-2xl bg-card p-6 shadow-sm">
              <h2 className="font-display font-bold text-lg text-ink">
                Komposisi &amp; Alokasi Jenis Sampah
              </h2>
              <p className="text-xs text-ink/60 mb-4">
                Proporsi tonase, nilai rupiah, dan poin diterbitkan.
              </p>
              <BreakdownBars breakdown={body.breakdownJenisSampah} />
            </section>
            <div className="lg:col-span-5">
              <Distribution />
            </div>
          </div>
          {tab === "bulanan" ? (
            <section className="rounded-2xl bg-card p-6 shadow-sm">
              <h2 className="font-display font-bold text-lg text-ink">
                Ringkasan Mingguan {formatMonth(bulan)}
              </h2>
              <p className="text-xs text-ink/60 mb-4">
                Komparasi siklus penimbangan fisik per pekan.
              </p>
              <WeeklyTable bulan={bulan} />
            </section>
          ) : null}
        </>
      ) : null}
    </div>
  );
}

function SkeletonCardWide() {
  return (
    <div className="col-span-2 lg:col-span-4 rounded-2xl bg-card p-6 shadow-sm">
      <div className="h-9 w-1/3 rounded bg-sand animate-pulse" />
    </div>
  );
}
