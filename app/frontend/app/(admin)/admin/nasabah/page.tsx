"use client";

import { useMemo, useState } from "react";
import Icon from "@/components/ui/Icon";
import EmptyState from "@/components/ui/EmptyState";
import NasabahModal from "@/components/admin/NasabahModal";
import PhotoTile from "@/components/ui/PhotoTile";
import { FormError } from "@/components/form/fields";
import { Skeleton } from "@/components/ui/Skeleton";
import { formatInt } from "@/lib/constants/format";
import { useNasabahList } from "@/hooks/nasabah/useNasabahList";
import type { NasabahRow } from "@/types/api";

export default function NasabahPage() {
  const { rows, error, retry } = useNasabahList();
  const [query, setQuery] = useState("");
  const [modal, setModal] = useState<{ open: boolean; row: NasabahRow | null }>({
    open: false,
    row: null,
  });

  const visible = useMemo(() => {
    if (!rows) return [];
    const q = query.trim().toLowerCase();
    return q
      ? rows.filter(
          (row) =>
            row.namaNasabah.toLowerCase().includes(q) ||
            row.telp.toLowerCase().includes(q) ||
            (row.user?.username.toLowerCase().includes(q) ?? false),
        )
      : rows;
  }, [rows, query]);

  const stats = useMemo(() => {
    if (!rows) return null;
    return {
      count: rows.length,
      totalPoin: rows.reduce((sum, row) => sum + row.saldoPoin, 0),
    };
  }, [rows]);

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
            Admin Bank • Data Nasabah
          </p>
          <h1 className="font-display font-extrabold text-3xl text-ink tracking-tight">
            Data Nasabah &amp; Saldo Poin Komunitas
          </h1>
          <p className="text-sm text-ink/60">
            Kelola akun warga, saldo poin, dan akses login unit Anda.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setModal({ open: true, row: null })}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-eco hover:bg-eco-deep text-white text-sm font-bold transition-colors self-start"
        >
          <Icon name="person_add" size="sm" />
          Tambah Nasabah Baru
        </button>
      </div>

      {stats ? (
        <div className="grid grid-cols-2 gap-4 max-w-lg">
          <div className="rounded-2xl bg-card p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-ink/50">
              Total Nasabah
            </p>
            <p className="font-display font-extrabold text-3xl text-ink tabular-nums mt-1">
              {formatInt(stats.count)}
            </p>
          </div>
          <div className="rounded-2xl bg-card p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-ink/50">
              Total Saldo Poin
            </p>
            <p className="font-display font-extrabold text-3xl text-eco tabular-nums mt-1">
              {formatInt(stats.totalPoin)}
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
          aria-label="Cari nasabah"
          placeholder="Cari nama, username, atau telepon…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-full bg-card text-sm text-ink placeholder:text-ink/40 outline-none focus:ring-2 focus:ring-eco shadow-sm"
        />
      </label>

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
      {visible.length > 0 ? (
        <ul className="space-y-3">
          {visible.map((row) => (
            <li
              key={row.id}
              className="flex items-center gap-3 p-4 rounded-2xl bg-card shadow-sm"
            >
              <PhotoTile
                foto={row.foto}
                photoStatus={row.photoStatus}
                alt={row.namaNasabah}
                icon="person"
                className="w-11 h-11 rounded-full"
              />
              <div className="flex-1 min-w-0">
                <p className="font-bold text-ink truncate">
                  {row.namaNasabah}
                  <span className="font-normal text-ink/50 text-xs">
                    {" "}
                    @{row.user?.username ?? "-"}
                  </span>
                </p>
                <p className="text-xs text-ink/60 truncate">
                  {row.telp} • {row.alamat}
                </p>
              </div>
              <p className="text-right shrink-0">
                <span className="block text-[11px] text-ink/50">Saldo</span>
                <strong className="font-display font-extrabold text-eco tabular-nums">
                  {formatInt(row.saldoPoin)}
                </strong>
              </p>
              <button
                type="button"
                onClick={() => setModal({ open: true, row })}
                aria-label={`Detail ${row.namaNasabah}`}
                className="p-2.5 rounded-full bg-sand hover:bg-peach/50 text-eco transition-colors shrink-0"
              >
                <Icon name="edit" size="sm" />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
      {rows && rows.length > 0 && visible.length === 0 ? (
        <div className="rounded-2xl bg-card shadow-sm">
          <EmptyState
            icon="search_off"
            title="Tidak ada nasabah cocok"
            message="Coba kata kunci yang berbeda."
          />
        </div>
      ) : null}
      {rows && rows.length === 0 ? (
        <div className="rounded-2xl bg-card shadow-sm">
          <EmptyState
            icon="group"
            title="Belum ada nasabah"
            message="Daftarkan warga pertama melalui tombol Tambah Nasabah Baru."
            action={
              <button
                type="button"
                onClick={() => setModal({ open: true, row: null })}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-eco hover:bg-eco-deep text-white text-sm font-bold transition-colors"
              >
                <Icon name="person_add" size="sm" />
                Tambah Nasabah Baru
              </button>
            }
          />
        </div>
      ) : null}

      {modal.open ? (
        <NasabahModal
          row={modal.row}
          onClose={closeModal}
          onSaved={refresh}
          onDeleted={refresh}
        />
      ) : null}
    </div>
  );
}
