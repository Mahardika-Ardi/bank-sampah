"use client";

import { useMemo, useState } from "react";
import Icon from "@/components/ui/Icon";
import EmptyState from "@/components/ui/EmptyState";
import VerifyPanel from "@/components/admin/VerifyPanel";
import { FormError } from "@/components/form/fields";
import { Skeleton } from "@/components/ui/Skeleton";
import { statusLabel, statusTone } from "@/lib/constants/status";
import { formatDateTime, formatInt, formatKg } from "@/lib/constants/format";
import { useAdminSetors } from "@/hooks/admin/useAdminSetors";

const TABS = [
  "semua",
  "menunggu_konfirmasi",
  "diverifikasi",
  "selesai",
  "ditolak",
] as const;

type Tab = (typeof TABS)[number];

export default function VerifikasiQueue({
  initialId,
}: {
  initialId?: string;
}) {
  const [tab, setTab] = useState<Tab>("menunggu_konfirmasi");
  const [bulan, setBulan] = useState("");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(initialId ?? null);
  const [version, setVersion] = useState(0);
  const { rows, error, retry } = useAdminSetors({
    status: tab === "semua" ? undefined : tab,
    bulan: bulan || undefined,
  });

  const visible = useMemo(() => {
    if (!rows) return [];
    const q = query.trim().toLowerCase();
    return q
      ? rows.filter((row) => row.kodeSetor.toLowerCase().includes(q))
      : rows;
  }, [rows, query]);

  const effectiveId =
    (selectedId && visible.some((row) => row.id === selectedId)
      ? selectedId
      : null) ??
    visible.find((row) => row.status === "menunggu_konfirmasi")?.id ??
    visible[0]?.id ??
    null;

  function handleVerified() {
    retry();
    setVersion((n) => n + 1);
  }

  return (
    <div className="w-full space-y-6 pb-8">
      <div className="space-y-1">
        <p className="text-xs font-bold uppercase tracking-wider text-muted">
          Admin Bank • Verifikasi Setoran
        </p>
        <h1 className="font-display font-extrabold text-3xl text-ink tracking-tight">
          Antrean &amp; Verifikasi Timbangan Sampah
        </h1>
        <p className="text-sm text-ink/60">
          Periksa timbangan fisik dan terbitkan saldo poin nasabah.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {TABS.map((value) => (
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
            {value === "semua" ? "Semua" : statusLabel(value)}
          </button>
        ))}
        <span className="flex-1" />
        <label className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted">
            <Icon name="search" size="sm" />
          </span>
          <input
            type="search"
            aria-label="Cari kode setoran"
            placeholder="Cari kode STR…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="pl-9 pr-3 py-2 rounded-full bg-card text-sm text-ink placeholder:text-ink/40 outline-none focus:ring-2 focus:ring-eco w-44"
          />
        </label>
        <label className="flex items-center gap-1.5 text-sm font-semibold text-ink/70">
          Bulan:
          <input
            type="month"
            aria-label="Filter bulan"
            value={bulan}
            onChange={(event) => setBulan(event.target.value)}
            className="px-3 py-2 rounded-full bg-card text-sm font-bold text-ink outline-none focus:ring-2 focus:ring-eco"
          />
        </label>
      </div>

      {rows === null && !error ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 space-y-3">
            <Skeleton className="h-24" />
            <Skeleton className="h-24" />
          </div>
          <div className="lg:col-span-7">
            <Skeleton className="h-96" />
          </div>
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

      {visible.length > 0 && effectiveId ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <ul className="lg:col-span-5 space-y-3">
            {visible.map((row) => {
              const active = row.id === effectiveId;
              return (
                <li key={row.id}>
                  <button
                    type="button"
                    onClick={() => setSelectedId(row.id)}
                    className={`w-full text-left p-4 rounded-2xl shadow-sm transition-all ${
                      active
                        ? "bg-eco-deep text-white"
                        : "bg-card hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`font-mono text-sm font-bold ${active ? "text-white" : "text-ink"}`}
                      >
                        {row.kodeSetor}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider whitespace-nowrap ${statusTone(row.status)}`}
                      >
                        {statusLabel(row.status)}
                      </span>
                    </div>
                    <p
                      className={`text-sm font-semibold mt-1 ${active ? "text-white" : "text-ink"}`}
                    >
                      {row.nasabah.namaNasabah}
                      <span
                        className={`font-normal ${active ? "text-white/70" : "text-ink/50"}`}
                      >
                        {" "}
                        • {row.nasabah.telp}
                      </span>
                    </p>
                    <p
                      className={`flex justify-between text-xs mt-1 tabular-nums ${active ? "text-white/70" : "text-ink/60"}`}
                    >
                      <span>{formatDateTime(row.tanggal)}</span>
                      <span className="font-bold">
                        {formatKg(row.totalBeratKg)} Kg •{" "}
                        {formatInt(row.totalPoin)} Poin
                      </span>
                    </p>
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="lg:col-span-7">
            <VerifyPanel
              key={`${effectiveId}:${version}`}
              setorId={effectiveId}
              onVerified={handleVerified}
            />
          </div>
        </div>
      ) : null}
      {visible.length === 0 && rows !== null ? (
        <div className="rounded-2xl bg-card shadow-sm">
          <EmptyState
            icon="scale"
            title="Antrean kosong"
            message="Tidak ada pengajuan pada filter ini."
          />
        </div>
      ) : null}
    </div>
  );
}
