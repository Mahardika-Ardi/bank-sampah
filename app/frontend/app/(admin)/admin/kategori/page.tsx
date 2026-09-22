"use client";

import { useMemo, useState } from "react";
import Icon from "@/components/ui/Icon";
import EmptyState from "@/components/ui/EmptyState";
import KategoriModal from "@/components/admin/KategoriModal";
import PhotoTile from "@/components/ui/PhotoTile";
import { FormError } from "@/components/form/fields";
import { Skeleton } from "@/components/ui/Skeleton";
import { WASTE_TYPE_LABELS, statusLabel, statusTone } from "@/lib/constants/status";
import { formatInt, formatRp } from "@/lib/constants/format";
import { useKategoriList } from "@/hooks/kategori/useKategoriList";
import type { Kategori } from "@/types/api";

export default function KategoriAdminPage() {
  const { items, error, retry } = useKategoriList();
  const [query, setQuery] = useState("");
  const [jenis, setJenis] = useState("semua");
  const [modal, setModal] = useState<{ open: boolean; row: Kategori | null }>({
    open: false,
    row: null,
  });

  const options = useMemo(() => {
    if (!items) return [];
    const counts = new Map<string, number>();
    for (const item of items)
      counts.set(item.jenis, (counts.get(item.jenis) ?? 0) + 1);
    return [...counts.entries()]
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([value, count]) => ({ value, count }));
  }, [items]);

  const visible = useMemo(() => {
    if (!items) return [];
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      if (jenis !== "semua" && item.jenis !== jenis) return false;
      return !q || item.namaKategori.toLowerCase().includes(q);
    });
  }, [items, query, jenis]);

  function closeModal() {
    setModal({ open: false, row: null });
  }

  function refresh() {
    closeModal();
    retry();
  }

  return (
    <div className="w-full space-y-6 pb-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
        <div className="space-y-1">
          <p className="text-xs font-bold uppercase tracking-wider text-muted">
            Admin Bank • Kategori Sampah &amp; Kurs Nilai
          </p>
          <h1 className="font-display font-extrabold text-3xl text-ink tracking-tight">
            Kelola Kategori Sampah &amp; Penetapan Harga
          </h1>
          <p className="text-sm text-ink/60">
            Konfigurasi harga tebus per kilogram dan alokasi poin hijau per
            komoditas.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setModal({ open: true, row: null })}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-eco hover:bg-eco-deep text-white text-sm font-bold transition-colors self-start"
        >
          <Icon name="add_circle" size="sm" />
          Tambah Kategori Baru
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setJenis("semua")}
          className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
            jenis === "semua"
              ? "bg-eco text-white"
              : "bg-card text-ink hover:bg-peach/50"
          }`}
        >
          Semua ({items?.length ?? 0})
        </button>
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => setJenis(option.value)}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
              jenis === option.value
                ? "bg-eco text-white"
                : "bg-card text-ink hover:bg-peach/50"
            }`}
          >
            {WASTE_TYPE_LABELS[option.value] ?? option.value} ({option.count})
          </button>
        ))}
        <span className="flex-1" />
        <label className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted">
            <Icon name="search" size="sm" />
          </span>
          <input
            type="search"
            aria-label="Cari kategori"
            placeholder="Cari kategori sampah…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="pl-9 pr-3 py-2 rounded-full bg-card text-sm text-ink placeholder:text-ink/40 outline-none focus:ring-2 focus:ring-eco w-52 shadow-sm"
          />
        </label>
      </div>

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
                <th className="py-3 pl-5 pr-3 font-bold">Kategori</th>
                <th className="py-3 pr-3 font-bold">Komoditas</th>
                <th className="py-3 pr-3 font-bold text-right">Tebus (Rp/Kg)</th>
                <th className="py-3 pr-3 font-bold text-right">Poin Hijau</th>
                <th className="py-3 pr-3 font-bold">Status Foto</th>
                <th className="py-3 pr-5 font-bold text-right">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {visible.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-ink/5 last:border-0"
                >
                  <td className="py-3 pl-5 pr-3">
                    <span className="flex items-center gap-2.5">
                      <PhotoTile
                        foto={item.foto}
                        photoStatus={item.photoStatus}
                        alt={item.namaKategori}
                        icon="recycling"
                        className="w-10 h-10 rounded-lg"
                      />
                      <strong className="text-ink">{item.namaKategori}</strong>
                    </span>
                  </td>
                  <td className="py-3 pr-3">
                    <span className="px-2 py-0.5 rounded-full bg-sand text-ink/70 text-[11px] font-bold uppercase tracking-wider whitespace-nowrap">
                      {WASTE_TYPE_LABELS[item.jenis] ?? item.jenis}
                    </span>
                  </td>
                  <td className="py-3 pr-3 text-right font-bold tabular-nums">
                    {formatRp(item.hargaPerKg)}
                  </td>
                  <td className="py-3 pr-3 text-right font-bold text-eco tabular-nums">
                    {formatInt(item.poinPerKg)} Poin
                  </td>
                  <td className="py-3 pr-3">
                    <span
                      className={`px-2 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider whitespace-nowrap ${statusTone(item.photoStatus)}`}
                    >
                      {statusLabel(item.photoStatus)}
                    </span>
                  </td>
                  <td className="py-3 pr-5 text-right">
                    <button
                      type="button"
                      onClick={() => setModal({ open: true, row: item })}
                      aria-label={`Edit ${item.namaKategori}`}
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
            title={items.length === 0 ? "Belum ada kategori" : "Tidak ada kategori cocok"}
            message={
              items.length === 0
                ? "Tambahkan kategori pertama melalui tombol di atas."
                : "Coba kata kunci atau filter jenis yang berbeda."
            }
          />
        </div>
      ) : null}

      {modal.open ? (
        <KategoriModal
          row={modal.row}
          onClose={closeModal}
          onSaved={refresh}
          onDeleted={refresh}
        />
      ) : null}
    </div>
  );
}
