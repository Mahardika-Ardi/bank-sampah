"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import EmptyState from "@/components/ui/EmptyState";
import ConfirmDialog from "@/components/ui/ConfirmDialog";
import PhotoTile from "@/components/ui/PhotoTile";
import { FormError } from "@/components/form/fields";
import { SkeletonCard } from "@/components/ui/Skeleton";
import { ApiError } from "@/lib/api/client";
import { tukarHadiah } from "@/lib/api/hadiah";
import { useHadiahList } from "@/hooks/hadiah/useHadiahList";
import { useProfile } from "@/hooks/auth/useProfile";
import { formatInt } from "@/lib/constants/format";
import type { Hadiah, TukarResult } from "@/types/api";

type SortKey = "poin-asc" | "poin-desc" | "nama";

export default function HadiahCatalogPage() {
  const { items, error, retry } = useHadiahList();
  const { profile, refresh: refreshProfile } = useProfile();
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("poin-asc");
  const [confirming, setConfirming] = useState<Hadiah | null>(null);
  const [redeeming, setRedeeming] = useState(false);
  const [redeemError, setRedeemError] = useState<string | null>(null);
  const [success, setSuccess] = useState<TukarResult | null>(null);

  const saldo = profile?.nasabah?.saldoPoin ?? 0;

  const visible = useMemo(() => {
    if (!items) return [];
    const q = query.trim().toLowerCase();
    const filtered = q
      ? items.filter((item) => item.namaHadiah.toLowerCase().includes(q))
      : [...items];
    switch (sort) {
      case "poin-desc":
        filtered.sort((a, b) => b.poinDibutuhkan - a.poinDibutuhkan);
        break;
      case "nama":
        filtered.sort((a, b) => a.namaHadiah.localeCompare(b.namaHadiah));
        break;
      case "poin-asc":
      default:
        filtered.sort((a, b) => a.poinDibutuhkan - b.poinDibutuhkan);
        break;
    }
    return filtered;
  }, [items, query, sort]);

  async function confirmTukar() {
    if (!confirming || redeeming) return;
    setRedeeming(true);
    setRedeemError(null);
    try {
      const result = await tukarHadiah(confirming.id);
      setSuccess(result);
      setConfirming(null);
      refreshProfile();
    } catch (err) {
      setRedeemError(
        err instanceof ApiError ? err.message : "Penukaran gagal. Coba lagi.",
      );
    } finally {
      setRedeeming(false);
    }
  }

  return (
    <div className="w-full space-y-6 pb-8">
      <div className="rounded-2xl bg-eco-deep text-white p-6 shadow-sm">
        <p className="text-[11px] font-bold uppercase tracking-wider text-gold">
          Saldo Reward Aktif
        </p>
        <p className="flex items-baseline gap-2 mt-1">
          <span className="font-display font-extrabold text-4xl tabular-nums">
            {formatInt(saldo)}
          </span>
          <span className="font-display font-bold">Poin Hijau</span>
        </p>
        <Link
          href="/tukar"
          className="mt-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-sm font-bold transition-colors"
        >
          <Icon name="receipt_long" size="sm" />
          Riwayat Penukaran
        </Link>
      </div>

      <div className="space-y-1">
        <h1 className="font-display font-extrabold text-3xl text-ink tracking-tight">
          Katalog Hadiah &amp; Penukaran Sembako
        </h1>
        <p className="text-sm text-ink/60">
          Tukarkan akumulasi poin daur ulang sampah Anda dengan bahan pokok
          berkualitas.
        </p>
      </div>

      {success ? (
        <div role="status" className="rounded-2xl bg-success/10 p-6 text-center">
          <span className="inline-flex w-12 h-12 rounded-full bg-success/15 text-success items-center justify-center mb-2">
            <Icon name="check_circle" />
          </span>
          <p className="font-display font-bold text-lg text-ink">
            Penukaran Berhasil!
          </p>
          <p className="font-mono font-bold text-ink mt-1">
            {success.kodePenukaran}
          </p>
          <p className="text-sm text-ink/60 tabular-nums">
            {formatInt(success.poinTerpakai)} poin digunakan
          </p>
          <Link
            href="/tukar"
            className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-eco hover:bg-eco-deep text-white text-sm font-bold transition-colors"
          >
            Lihat Riwayat
            <Icon name="arrow_forward" size="sm" />
          </Link>
        </div>
      ) : null}

      {!items && !error ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          <SkeletonCard />
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
      {items ? (
        <>
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-4 py-2 rounded-full bg-eco text-white text-sm font-bold">
              Semua Hadiah ({items.length})
            </span>
            <span className="flex-1" />
            <label className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted">
                <Icon name="search" size="sm" />
              </span>
              <input
                type="search"
                aria-label="Cari hadiah"
                placeholder="Cari hadiah…"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="pl-9 pr-3 py-2 rounded-full bg-card text-sm text-ink placeholder:text-ink/40 outline-none focus:ring-2 focus:ring-eco w-48"
              />
            </label>
            <label className="flex items-center gap-1.5 text-sm font-semibold text-ink/70">
              Urutkan:
              <select
                aria-label="Urutkan hadiah"
                value={sort}
                onChange={(event) => setSort(event.target.value as SortKey)}
                className="px-3 py-2 rounded-full bg-card text-sm font-bold text-ink outline-none focus:ring-2 focus:ring-eco cursor-pointer"
              >
                <option value="poin-asc">Poin Terendah</option>
                <option value="poin-desc">Poin Tertinggi</option>
                <option value="nama">Nama A–Z</option>
              </select>
            </label>
          </div>
          <FormError message={redeemError} />
          {visible.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {visible.map((item) => {
                const outOfStock = item.stok <= 0;
                const insufficient = saldo < item.poinDibutuhkan;
                const disabled = outOfStock || insufficient;
                return (
                  <article
                    key={item.id}
                    className="rounded-2xl bg-card shadow-sm overflow-hidden flex flex-col"
                  >
                    <div className="relative">
                      <PhotoTile
                        foto={item.foto}
                        photoStatus={item.photoStatus}
                        alt={item.namaHadiah}
                        icon="card_giftcard"
                        className="w-full h-40 rounded-none"
                      />
                      <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-card/90 text-ink text-[11px] font-bold tabular-nums">
                        Tersedia: {formatInt(item.stok)}
                      </span>
                    </div>
                    <div className="p-4 flex flex-col gap-1.5 flex-1">
                      <h3 className="font-display font-bold text-ink">
                        {item.namaHadiah}
                      </h3>
                      <p className="text-sm text-ink/60">
                        Harga Tebus{" "}
                        <strong className="text-gold tabular-nums">
                          {formatInt(item.poinDibutuhkan)} POIN
                        </strong>
                      </p>
                      <button
                        type="button"
                        disabled={disabled}
                        onClick={() => setConfirming(item)}
                        className="mt-auto inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-eco hover:bg-eco-deep disabled:bg-sand disabled:text-ink/40 text-white text-sm font-bold transition-colors"
                      >
                        <Icon
                          name={outOfStock ? "block" : "redeem"}
                          size="sm"
                        />
                        {outOfStock
                          ? "Stok Habis"
                          : insufficient
                            ? `Poin Kurang ${formatInt(item.poinDibutuhkan - saldo)}`
                            : "Tukar Sekarang"}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="rounded-2xl bg-card shadow-sm">
              <EmptyState
                icon="search_off"
                title="Tidak ada hadiah cocok"
                message="Coba kata kunci yang berbeda."
              />
            </div>
          )}
        </>
      ) : null}

      {confirming ? (
        <ConfirmDialog
          title="Tukar poin dengan hadiah?"
          message={`${confirming.namaHadiah} — ${formatInt(confirming.poinDibutuhkan)} poin akan dipotong dari saldo Anda.`}
          confirmLabel="Ya, Tukar"
          loading={redeeming}
          onConfirm={() => void confirmTukar()}
          onCancel={() => {
            if (!redeeming) setConfirming(null);
          }}
        />
      ) : null}
    </div>
  );
}
