"use client";

import { useState } from "react";
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
  formatKg,
  formatMonth,
} from "@/lib/constants/format";
import { useMySetor } from "@/hooks/setor/useMySetor";
import type { MySetorRow } from "@/types/api";

function SetorRow({ row }: { row: MySetorRow }) {
  return (
    <li>
      <Link
        href={`/setor/${row.id}`}
        className="flex items-center gap-3 p-4 rounded-2xl bg-card shadow-sm hover:shadow-md transition-shadow"
      >
        <span className="w-10 h-10 rounded-full bg-eco/10 text-eco flex items-center justify-center shrink-0">
          <Icon name="receipt_long" size="sm" />
        </span>
        <span className="flex-1 min-w-0">
          <span className="block font-mono text-sm font-bold text-ink truncate">
            {row.kodeSetor}
          </span>
          <span className="block text-xs text-ink/60">
            {formatDateTime(row.tanggal)} • {formatKg(row.totalBeratKg)} Kg •{" "}
            {formatInt(row.totalPoin)} Poin
          </span>
        </span>
        <span
          className={`px-2 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider whitespace-nowrap ${statusTone(row.status)}`}
        >
          {statusLabel(row.status)}
        </span>
        <Icon name="chevron_right" size="sm" className="text-muted shrink-0" />
      </Link>
    </li>
  );
}

export default function SetorListPage() {
  const [bulan, setBulan] = useState(currentMonth);
  const { rows, error, retry } = useMySetor(bulan);

  return (
    <div className="w-full space-y-6 pb-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
        <div className="space-y-1">
          <h1 className="font-display font-extrabold text-3xl text-ink tracking-tight">
            Riwayat Setoran Sampah
          </h1>
          <p className="text-sm text-ink/60">
            Semua pengajuan setoran Anda beserta status verifikasinya. Ketuk
            untuk melihat nota.
          </p>
        </div>
        <label className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-sm text-sm font-bold text-ink cursor-pointer self-start">
          <Icon name="calendar_today" size="sm" className="text-eco" />
          <span>{formatMonth(bulan)}</span>
          <input
            type="month"
            aria-label="Pilih periode bulan"
            value={bulan}
            onChange={(event) => {
              if (event.target.value) setBulan(event.target.value);
            }}
            className="sr-only"
          />
        </label>
      </div>

      {rows === null && !error ? (
        <div className="space-y-3">
          <Skeleton className="h-20" />
          <Skeleton className="h-20" />
          <Skeleton className="h-20" />
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
      {rows && rows.length > 0 ? (
        <ul className="space-y-3">
          {rows.map((row) => (
            <SetorRow key={row.id} row={row} />
          ))}
        </ul>
      ) : null}
      {rows && rows.length === 0 ? (
        <div className="rounded-2xl bg-card shadow-sm">
          <EmptyState
            icon="receipt_long"
            title="Belum ada setoran bulan ini"
            message="Pengajuan yang Anda kirim akan tercatat di sini."
            action={
              <Link
                href="/setor/baru"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-eco hover:bg-eco-deep text-white text-sm font-bold transition-colors"
              >
                <Icon name="add_circle" size="sm" />
                Buat Setoran
              </Link>
            }
          />
        </div>
      ) : null}
    </div>
  );
}
