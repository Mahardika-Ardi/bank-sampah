"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import EmptyState from "@/components/ui/EmptyState";
import { FormError } from "@/components/form/fields";
import { Skeleton } from "@/components/ui/Skeleton";
import { statusLabel, statusTone } from "@/lib/constants/status";
import {
  currentMonth,
  formatDateTime,
  formatInt,
  formatMonth,
} from "@/lib/constants/format";
import { useAdminSetors } from "@/hooks/admin/useAdminSetors";
import { useAdminPenukaran } from "@/hooks/admin/useAdminPenukaran";

type FeedRow =
  | {
      kind: "setor";
      id: string;
      kode: string;
      tanggal: string;
      title: string;
      sub: string;
      poin: number;
      in: boolean;
      status: string;
    }
  | {
      kind: "tukar";
      id: string;
      kode: string;
      tanggal: string;
      title: string;
      sub: string;
      poin: number;
      in: false;
      status: string;
    };

export default function TransaksiPage() {
  const [bulan, setBulan] = useState(currentMonth);
  const { rows: setors, error: setorError, retry: retrySetor } = useAdminSetors({ bulan });
  const { rows: tukars, error: tukarError } = useAdminPenukaran();

  const feed = useMemo<FeedRow[]>(() => {
    const rows: FeedRow[] = [];
    for (const s of setors ?? []) {
      rows.push({
        kind: "setor",
        id: s.id,
        kode: s.kodeSetor,
        tanggal: s.tanggal,
        title: s.nasabah.namaNasabah,
        sub: s.nasabah.telp,
        poin: s.totalPoin,
        in: true,
        status: s.status,
      });
    }
    for (const t of tukars ?? []) {
      if (!t.tanggal.startsWith(bulan)) continue;
      rows.push({
        kind: "tukar",
        id: t.id,
        kode: t.kodePenukaran,
        tanggal: t.tanggal,
        title: t.hadiah.namaHadiah,
        sub: `${formatInt(t.poinTerpakai)} poin terpakai`,
        poin: t.poinTerpakai,
        in: false,
        status: t.status,
      });
    }
    rows.sort((a, b) => b.tanggal.localeCompare(a.tanggal));
    return rows;
  }, [setors, tukars, bulan]);

  const error = setorError ?? tukarError;

  return (
    <div className="w-full space-y-6 pb-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
        <div className="space-y-1">
          <p className="text-xs font-bold uppercase tracking-wider text-muted">
            Admin Bank • Transaksi
          </p>
          <h1 className="font-display font-extrabold text-3xl text-ink tracking-tight">
            Semua Transaksi Unit
          </h1>
          <p className="text-sm text-ink/60">
            Setoran dan penukaran bulan berjalan, terbaru di atas.
          </p>
        </div>
        <label className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-sm text-sm font-bold text-ink cursor-pointer self-start">
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
      </div>

      {!setors || !tukars ? (
        !error ? (
          <div className="space-y-3">
            <Skeleton className="h-20" />
            <Skeleton className="h-20" />
            <Skeleton className="h-20" />
          </div>
        ) : null
      ) : null}
      {error ? (
        <div className="rounded-2xl bg-card p-6 shadow-sm">
          <FormError message={error} />
          <button
            type="button"
            onClick={retrySetor}
            className="mt-3 px-5 py-2.5 rounded-full bg-eco hover:bg-eco-deep text-white text-sm font-bold transition-colors"
          >
            Coba Lagi
          </button>
        </div>
      ) : null}

      {feed.length > 0 ? (
        <ul className="space-y-3">
          {feed.map((row) => (
            <li
              key={`${row.kind}-${row.id}`}
              className="flex items-center gap-3 p-4 rounded-2xl bg-card shadow-sm"
            >
              <span
                className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                  row.in ? "bg-eco/10 text-eco" : "bg-gold/20 text-eco"
                }`}
              >
                <Icon name={row.in ? "receipt_long" : "redeem"} size="sm" />
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-mono text-sm font-bold text-ink truncate">
                  {row.kode}
                  <span className="font-body font-normal text-ink/50 text-xs">
                    {" "}
                    • {formatDateTime(row.tanggal)}
                  </span>
                </p>
                <p className="text-sm font-semibold text-ink truncate">
                  {row.title}
                  <span className="font-normal text-ink/50 text-xs">
                    {" "}
                    • {row.sub}
                  </span>
                </p>
              </div>
              <div className="text-right shrink-0">
                <p
                  className={`font-display font-extrabold tabular-nums ${
                    row.in ? "text-success" : "text-danger"
                  }`}
                >
                  {row.in ? "+" : "-"}
                  {formatInt(row.poin)}
                </p>
                <span
                  className={`inline-block mt-0.5 px-2 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider ${statusTone(row.status)}`}
                >
                  {statusLabel(row.status)}
                </span>
              </div>
              {row.kind === "setor" ? (
                <Link
                  href={`/admin/verifikasi?id=${row.id}`}
                  aria-label={`Verifikasi ${row.kode}`}
                  className="p-2.5 rounded-full bg-sand hover:bg-peach/50 text-eco transition-colors shrink-0"
                >
                  <Icon name="chevron_right" size="sm" />
                </Link>
              ) : null}
            </li>
          ))}
        </ul>
      ) : null}
      {setors && tukars && feed.length === 0 ? (
        <div className="rounded-2xl bg-card shadow-sm">
          <EmptyState
            icon="receipt_long"
            title="Belum ada transaksi bulan ini"
            message="Setoran dan penukaran unit akan tercatat di sini."
          />
        </div>
      ) : null}
    </div>
  );
}
