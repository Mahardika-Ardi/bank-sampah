"use client";

import { useMemo, useState } from "react";
import Icon from "@/components/ui/Icon";
import EmptyState from "@/components/ui/EmptyState";
import HadiahModal from "@/components/admin/HadiahModal";
import PhotoTile from "@/components/ui/PhotoTile";
import { FormError } from "@/components/form/fields";
import { Skeleton } from "@/components/ui/Skeleton";
import { ApiError } from "@/lib/api/client";
import { setHadiahStok } from "@/lib/api/hadiah";
import { useHadiahList } from "@/hooks/hadiah/useHadiahList";
import { useAdminPenukaran } from "@/hooks/admin/useAdminPenukaran";
import { formatInt } from "@/lib/constants/format";
import type { Hadiah } from "@/types/api";

const LOW_STOCK_LIMIT = 5;

export default function HadiahAdminPage() {
  const { items, error, retry } = useHadiahList();
  const { rows: tukars } = useAdminPenukaran();
  const [query, setQuery] = useState("");
  const [modal, setModal] = useState<{ open: boolean; row: Hadiah | null }>({
    open: false,
    row: null,
  });
  const [adjusting, setAdjusting] = useState<string | null>(null);
  const [adjustError, setAdjustError] = useState<string | null>(null);

  const visible = useMemo(() => {
    if (!items) return [];
    const q = query.trim().toLowerCase();
    return q
      ? items.filter((item) => item.namaHadiah.toLowerCase().includes(q))
      : items;
  }, [items, query]);

  const critical = items ? items.filter((h) => h.stok <= LOW_STOCK_LIMIT) : null;

  function closeModal() {
    setModal({ open: false, row: null });
  }

  function refresh() {
    closeModal();
    retry();
  }

  async function adjust(item: Hadiah, delta: number) {
    const next = item.stok + delta;
    if (next < 0 || adjusting) return;
    setAdjusting(item.id);
    setAdjustError(null);
    try {
      await setHadiahStok(item.id, next);
      retry();
    } catch (err) {
      setAdjustError(
        err instanceof ApiError ? err.message : "Penyesuaian stok gagal.",
      );
    } finally {
      setAdjusting(null);
    }
  }

  return (
    <div className="w-full space-y-6 pb-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
        <div className="space-y-1">
          <p className="text-xs font-bold uppercase tracking-wider text-muted">
            Admin Bank • Inventaris Hadiah
          </p>
          <h1 className="font-display font-extrabold text-3xl text-ink tracking-tight">
            Kelola Stok Hadiah &amp; Sembako
          </h1>
          <p className="text-sm text-ink/60">
            Manajemen ketersediaan hadiah dan restock gudang operasional.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setModal({ open: true, row: null })}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-eco hover:bg-eco-deep text-white text-sm font-bold transition-colors self-start"
        >
          <Icon name="add_circle" size="sm" />
          Tambah Item Hadiah Baru
        </button>
      </div>

      {items && tukars ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-2xl bg-card p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-ink/50">
              Katalog Terdaftar
            </p>
            <p className="font-display font-extrabold text-3xl text-ink tabular-nums mt-1">
              {formatInt(items.length)}{" "}
              <span className="text-sm font-bold">Varian</span>
            </p>
          </div>
          <div className="rounded-2xl bg-card p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-ink/50">
              Perlu Restock
            </p>
            <p className="font-display font-extrabold text-3xl text-danger tabular-nums mt-1">
              {formatInt(critical?.length ?? 0)}{" "}
              <span className="text-sm font-bold">Item Kritis</span>
            </p>
          </div>
          <div className="rounded-2xl bg-eco-deep text-white p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-gold">
              Kapitalisasi Poin Stok
            </p>
            <p className="font-display font-extrabold text-3xl tabular-nums mt-1">
              {formatInt(
                items.reduce((sum, h) => sum + h.poinDibutuhkan * h.stok, 0),
              )}{" "}
              <span className="text-sm font-bold">Poin</span>
            </p>
          </div>
          <div className="rounded-2xl bg-card p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-ink/50">
              Klaim Terdistribusi
            </p>
            <p className="font-display font-extrabold text-3xl text-ink tabular-nums mt-1">
              {formatInt(tukars.length)}{" "}
              <span className="text-sm font-bold">Paket</span>
            </p>
          </div>
        </div>
      ) : null}

      <label className="relative block max-w-md">
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted">
          <Icon name="search" size="sm" />
        </span>
        <input
          type="search"
          aria-label="Cari hadiah"
          placeholder="Filter nama barang…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-full bg-card text-sm text-ink placeholder:text-ink/40 outline-none focus:ring-2 focus:ring-eco shadow-sm"
        />
      </label>

      <FormError message={adjustError} />
      {!items && !error ? (
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

      {visible.length > 0 ? (
        <div className="rounded-2xl bg-card shadow-sm overflow-x-auto">
          <table className="w-full text-sm min-w-2xl">
            <thead>
              <tr className="text-left text-[11px] uppercase tracking-wider text-ink/50 border-b border-ink/10">
                <th className="py-3 pl-5 pr-3 font-bold">Foto &amp; Nama Hadiah</th>
                <th className="py-3 pr-3 font-bold text-right">Biaya Tebus</th>
                <th className="py-3 pr-3 font-bold text-right">Sisa Stok</th>
                <th className="py-3 pr-3 font-bold text-right">Quick Adjust</th>
                <th className="py-3 pr-5 font-bold text-right">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {visible.map((item) => (
                <tr
                  key={item.id}
                  className={`border-b border-ink/5 last:border-0 ${item.stok <= LOW_STOCK_LIMIT ? "bg-danger/[0.03]" : ""}`}
                >
                  <td className="py-3 pl-5 pr-3">
                    <span className="flex items-center gap-2.5">
                      <PhotoTile
                        foto={item.foto}
                        photoStatus={item.photoStatus}
                        alt={item.namaHadiah}
                        icon="card_giftcard"
                        className="w-10 h-10 rounded-lg"
                      />
                      <strong className="text-ink">{item.namaHadiah}</strong>
                    </span>
                  </td>
                  <td className="py-3 pr-3 text-right font-bold text-gold tabular-nums whitespace-nowrap">
                    {formatInt(item.poinDibutuhkan)} Poin
                  </td>
                  <td className="py-3 pr-3 text-right">
                    <span
                      className={`font-bold tabular-nums ${item.stok <= LOW_STOCK_LIMIT ? "text-danger" : "text-ink"}`}
                    >
                      {formatInt(item.stok)}
                    </span>
                  </td>
                  <td className="py-3 pr-3">
                    <span className="flex items-center justify-end gap-1.5">
                      <button
                        type="button"
                        aria-label={`Kurangi stok ${item.namaHadiah}`}
                        disabled={adjusting !== null}
                        onClick={() => void adjust(item, -1)}
                        className="w-7 h-7 rounded-full bg-sand hover:bg-peach/60 text-ink font-bold disabled:opacity-40 transition-colors"
                      >
                        −
                      </button>
                      <button
                        type="button"
                        aria-label={`Tambah stok ${item.namaHadiah}`}
                        disabled={adjusting !== null}
                        onClick={() => void adjust(item, 1)}
                        className="w-7 h-7 rounded-full bg-sand hover:bg-peach/50 text-ink font-bold disabled:opacity-40 transition-colors"
                      >
                        +
                      </button>
                    </span>
                  </td>
                  <td className="py-3 pr-5 text-right">
                    <button
                      type="button"
                      onClick={() => setModal({ open: true, row: item })}
                      aria-label={`Edit ${item.namaHadiah}`}
                      className="p-2 rounded-full bg-sand hover:bg-peach/50 text-eco transition-colors"
                    >
                      <Icon name="edit" size="sm" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
      {items && visible.length === 0 ? (
        <div className="rounded-2xl bg-card shadow-sm">
          <EmptyState
            icon="search_off"
            title={items.length === 0 ? "Katalog kosong" : "Tidak ada hadiah cocok"}
            message={
              items.length === 0
                ? "Tambahkan item pertama melalui tombol di atas."
                : "Coba kata kunci yang berbeda."
            }
          />
        </div>
      ) : null}

      {modal.open ? (
        <HadiahModal
          row={modal.row}
          onClose={closeModal}
          onSaved={refresh}
          onDeleted={refresh}
        />
      ) : null}
    </div>
  );
}
