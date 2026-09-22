"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import EmptyState from "@/components/ui/EmptyState";
import { FormError } from "@/components/form/fields";
import PhotoTile from "@/components/ui/PhotoTile";
import { statusLabel, statusTone } from "@/lib/constants/status";
import { formatDateTime, formatInt, formatMonth } from "@/lib/constants/format";
import { useMyPenukaran } from "@/hooks/penukaran/useMyPenukaran";
import type { MyPenukaranRow } from "@/types/api";

type StatusTab = "semua" | "diproses" | "selesai";

function shiftMonth(bulan: string, delta: number): string {
  const [year, month] = bulan.split("-").map(Number);
  const date = new Date(year, month - 1 + delta, 1);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

function TukarRow({ row }: { row: MyPenukaranRow }) {
  return (
    <li className="rounded-2xl bg-card shadow-sm p-4 flex gap-3">
      <PhotoTile
        foto={row.hadiah.foto}
        alt={row.hadiah.namaHadiah}
        icon="card_giftcard"
        className="w-16 h-16 rounded-xl"
      />
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
          <span className="font-mono font-bold text-ink">
            {row.kodePenukaran}
          </span>
          <span className="text-ink/50">{formatDateTime(row.tanggal)}</span>
          <span
            className={`px-2 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider ${statusTone(row.status)}`}
          >
            {statusLabel(row.status)}
          </span>
        </div>
        <p className="font-bold text-ink truncate mt-0.5">
          {row.hadiah.namaHadiah}
        </p>
      </div>
      <p className="font-display font-bold text-danger tabular-nums whitespace-nowrap self-start">
        -{formatInt(row.poinTerpakai)} Poin
      </p>
    </li>
  );
}

export default function TukarHistoryPage() {
  const { rows, error } = useMyPenukaran();
  const [tab, setTab] = useState<StatusTab>("semua");
  const [query, setQuery] = useState("");
  const [bulan, setBulan] = useState<string | null>(null);

  const stats = useMemo(() => {
    if (!rows) return null;
    return {
      total: rows.reduce((sum, row) => sum + row.poinTerpakai, 0),
      count: rows.length,
      siapAmbil: rows.filter((row) => row.status === "diproses").length,
    };
  }, [rows]);

  const visible = useMemo(() => {
    if (!rows) return [];
    const q = query.trim().toLowerCase();
    return rows.filter((row) => {
      if (tab !== "semua" && row.status !== tab) return false;
      if (bulan && !row.tanggal.startsWith(bulan)) return false;
      if (
        q &&
        !row.kodePenukaran.toLowerCase().includes(q) &&
        !row.hadiah.namaHadiah.toLowerCase().includes(q)
      )
        return false;
      return true;
    });
  }, [rows, tab, query, bulan]);

  const diprosesCount = rows?.filter((r) => r.status === "diproses").length ?? 0;
  const selesaiCount = rows?.filter((r) => r.status === "selesai").length ?? 0;

  return (
    <div className="w-full space-y-6 pb-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
        <div className="space-y-1">
          <h1 className="font-display font-extrabold text-3xl text-ink tracking-tight">
            Riwayat Penukaran Hadiah &amp; Voucher
          </h1>
          <p className="text-sm text-ink/60">
            Daftar transaksi penukaran saldo poin daur ulang Anda.
          </p>
        </div>
        <Link
          href="/hadiah"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold hover:bg-peach text-ink text-sm font-bold transition-colors self-start"
        >
          <Icon name="card_giftcard" size="sm" />
          Katalog Hadiah
        </Link>
      </div>

      {stats ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-2xl bg-card p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-ink/50">
              Total Poin Ditukar
            </p>
            <p className="font-display font-extrabold text-3xl text-ink tabular-nums mt-1">
              {formatInt(stats.total)}{" "}
              <span className="text-base font-bold">Poin</span>
            </p>
          </div>
          <div className="rounded-2xl bg-card p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-ink/50">
              Total Hadiah Diterima
            </p>
            <p className="font-display font-extrabold text-3xl text-ink tabular-nums mt-1">
              {formatInt(stats.count)}{" "}
              <span className="text-base font-bold">Hadiah</span>
            </p>
          </div>
          <div className="rounded-2xl bg-card p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-ink/50">
              Siap Ambil di Loket
            </p>
            <p className="font-display font-extrabold text-3xl text-ink tabular-nums mt-1">
              {formatInt(stats.siapAmbil)}{" "}
              <span className="text-base font-bold">Voucher</span>
            </p>
          </div>
        </div>
      ) : null}

      <div className="flex flex-wrap items-center gap-2">
        {(
          [
            ["semua", `Semua Transaksi (${rows?.length ?? 0})`],
            ["diproses", `Diproses / Siap Ambil ${diprosesCount}`],
            ["selesai", `Selesai ${selesaiCount}`],
          ] as [StatusTab, string][]
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
        <label className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted">
            <Icon name="search" size="sm" />
          </span>
          <input
            type="search"
            aria-label="Cari penukaran"
            placeholder="Cari kode TKR, nama hadiah…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="pl-9 pr-3 py-2 rounded-full bg-card text-sm text-ink placeholder:text-ink/40 outline-none focus:ring-2 focus:ring-eco w-56"
          />
        </label>
        <span className="flex items-center gap-1 px-3 py-2 rounded-full bg-card text-sm font-bold text-ink">
          <button
            type="button"
            aria-label="Bulan sebelumnya"
            onClick={() =>
              setBulan((prev) =>
                shiftMonth(
                  prev ?? new Date().toISOString().slice(0, 7),
                  -1,
                ),
              )
            }
            className="p-0.5 text-ink/60 hover:text-ink"
          >
            <Icon name="chevron_left" size="sm" />
          </button>
          {bulan ? formatMonth(bulan) : "Semua Bulan"}
          <button
            type="button"
            aria-label="Bulan berikutnya"
            onClick={() =>
              setBulan((prev) =>
                shiftMonth(
                  prev ?? new Date().toISOString().slice(0, 7),
                  1,
                ),
              )
            }
            className="p-0.5 text-ink/60 hover:text-ink"
          >
            <Icon name="chevron_right" size="sm" />
          </button>
          {bulan ? (
            <button
              type="button"
              onClick={() => setBulan(null)}
              className="text-xs font-bold text-eco hover:underline ml-1"
            >
              Reset
            </button>
          ) : null}
        </span>
      </div>

      {rows === null && !error ? (
        <div className="space-y-3">
          <SkeletonCardWide />
        </div>
      ) : null}
      {error ? (
        <div className="rounded-2xl bg-card p-6 shadow-sm">
          <FormError message={error} />
        </div>
      ) : null}
      {visible.length > 0 ? (
        <ul className="space-y-3">
          {visible.map((row) => (
            <TukarRow key={row.id} row={row} />
          ))}
        </ul>
      ) : null}
      {rows && rows.length > 0 && visible.length === 0 ? (
        <div className="rounded-2xl bg-card shadow-sm">
          <EmptyState
            icon="search_off"
            title="Tidak ada transaksi cocok"
            message="Coba filter atau kata kunci yang berbeda."
          />
        </div>
      ) : null}
      {rows && rows.length === 0 ? (
        <div className="rounded-2xl bg-card shadow-sm">
          <EmptyState
            icon="redeem"
            title="Belum ada penukaran"
            message="Riwayat klaim hadiah Anda akan tercatat di sini."
            action={
              <Link
                href="/hadiah"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold hover:bg-peach text-ink text-sm font-bold transition-colors"
              >
                <Icon name="card_giftcard" size="sm" />
                Lihat Katalog
              </Link>
            }
          />
        </div>
      ) : null}
    </div>
  );
}

function SkeletonCardWide() {
  return (
    <div className="rounded-2xl bg-card p-4 shadow-sm flex gap-3">
      <div className="w-16 h-16 rounded-xl bg-sand animate-pulse shrink-0" />
      <div className="flex-1 space-y-2 py-1">
        <div className="h-4 w-1/3 rounded bg-sand animate-pulse" />
        <div className="h-4 w-2/3 rounded bg-sand animate-pulse" />
      </div>
    </div>
  );
}
