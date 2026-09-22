"use client";

import { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import EmptyState from "@/components/ui/EmptyState";
import { FormError } from "@/components/form/fields";
import { SkeletonCard } from "@/components/ui/Skeleton";
import { ApiError } from "@/lib/api/client";
import { submitSetor } from "@/lib/api/setor";
import { useKategoriList } from "@/hooks/kategori/useKategoriList";
import { formatInt, formatKg } from "@/lib/constants/format";
import type { Kategori } from "@/types/api";

type ItemRow = {
  key: number;
  kategoriId: string;
  berat: string;
};

function todayInput(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

function parsePrefill(
  kategori: string | undefined,
  items: string | undefined,
  catalog: Kategori[],
): ItemRow[] {
  const ids = new Set(catalog.map((k) => k.id));
  const rows: ItemRow[] = [];
  let key = 1;
  if (items) {
    for (const part of items.split(",")) {
      const [id, kg] = part.split(":");
      if (id && ids.has(id)) {
        const berat = Number(kg);
        rows.push({
          key: key++,
          kategoriId: id,
          berat: Number.isFinite(berat) && berat > 0 ? String(berat) : "",
        });
      }
    }
  }
  if (rows.length === 0 && kategori && ids.has(kategori)) {
    rows.push({ key: key++, kategoriId: kategori, berat: "" });
  }
  if (rows.length === 0) rows.push({ key: key++, kategoriId: "", berat: "" });
  return rows;
}

export default function SetorForm({
  initialKategori,
  initialItems,
}: {
  initialKategori?: string;
  initialItems?: string;
}) {
  const router = useRouter();
  const { items: catalog, error: loadError, retry } = useKategoriList();
  const keyRef = useRef(1000);
  const [rows, setRows] = useState<ItemRow[] | null>(null);
  const [tanggal, setTanggal] = useState(todayInput);
  const [catatan, setCatatan] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const activeRows = useMemo(() => {
    if (rows) return rows;
    if (!catalog) return null;
    return parsePrefill(initialKategori, initialItems, catalog);
  }, [rows, catalog, initialKategori, initialItems]);

  function updateRow(key: number, patch: Partial<ItemRow>) {
    setRows((prev) => {
      const base = prev ?? activeRows ?? [];
      return base.map((row) => (row.key === key ? { ...row, ...patch } : row));
    });
  }

  function addRow() {
    keyRef.current += 1;
    const key = keyRef.current;
    setRows((prev) => [...(prev ?? activeRows ?? []), { key, kategoriId: "", berat: "" }]);
  }

  function removeRow(key: number) {
    setRows((prev) => (prev ?? activeRows ?? []).filter((row) => row.key !== key));
  }

  const priced = useMemo(() => {
    if (!catalog || !activeRows) return [];
    const byId = new Map(catalog.map((k) => [k.id, k]));
    return activeRows.map((row) => {
      const kategori = byId.get(row.kategoriId) ?? null;
      const berat = Number(row.berat);
      const valid =
        kategori !== null && Number.isFinite(berat) && berat > 0;
      return {
        row,
        kategori,
        berat,
        poin: valid && kategori ? kategori.poinPerKg * berat : 0,
        valid,
      };
    });
  }, [catalog, activeRows]);

  const validRows = priced.filter((p) => p.valid);
  const totalBerat = validRows.reduce((sum, p) => sum + p.berat, 0);
  const totalPoin = validRows.reduce((sum, p) => sum + p.poin, 0);
  const progress =
    priced.length === 0
      ? 0
      : Math.round((validRows.length / priced.length) * 100);

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);
    if (validRows.length === 0) {
      setError("Tambahkan minimal satu baris berisi kategori dan berat yang valid.");
      return;
    }
    if (!tanggal) {
      setError("Pilih tanggal rencana penyerahan.");
      return;
    }
    setSubmitting(true);
    try {
      const result = await submitSetor({
        tanggal: new Date(`${tanggal}T00:00:00`).toISOString(),
        catatan,
        items: validRows.map((p) => ({
          kategoriSampahId: p.row.kategoriId,
          beratKg: p.berat,
        })),
      });
      router.replace(`/setor/${result.id}`);
    } catch (err) {
      setError(
        err instanceof ApiError ? err.message : "Pengajuan gagal. Coba lagi.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (loadError) {
    return (
      <div className="rounded-2xl bg-card p-6 shadow-sm">
        <FormError message={loadError} />
        <button
          type="button"
          onClick={retry}
          className="mt-3 px-5 py-2.5 rounded-full bg-eco hover:bg-eco-deep text-white text-sm font-bold transition-colors"
        >
          Coba Lagi
        </button>
      </div>
    );
  }

  if (!catalog || !activeRows) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8">
          <SkeletonCard />
        </div>
        <div className="lg:col-span-4">
          <SkeletonCard />
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={(event) => void onSubmit(event)}
      className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
    >
      <div className="lg:col-span-8 rounded-2xl bg-card p-6 shadow-sm space-y-5">
        <div className="p-4 rounded-xl bg-sand/60">
          <label
            htmlFor="tanggal"
            className="flex items-center gap-2 font-display font-bold text-ink"
          >
            <Icon name="calendar_today" size="sm" className="text-eco" />
            Tanggal Rencana Penyerahan
          </label>
          <p className="text-xs text-ink/60 mt-0.5 mb-2">
            Pilih jadwal kedatangan Anda ke unit penimbangan
          </p>
          <input
            id="tanggal"
            type="date"
            required
            value={tanggal}
            onChange={(event) => setTanggal(event.target.value)}
            className="px-3 py-2 rounded-xl bg-card text-sm text-ink outline-none focus:ring-2 focus:ring-eco"
          />
        </div>

        <div className="flex items-center justify-between">
          <h2 className="flex items-center gap-2 font-display font-bold text-lg text-ink">
            <Icon name="recycling" size="sm" className="text-eco" />
            Barang yang Akan Disetor
          </h2>
          <span className="px-2 py-0.5 rounded-full bg-gold/20 text-eco text-[11px] font-bold uppercase tracking-wider">
            {validRows.length} Kategori Dipilih
          </span>
        </div>

        {priced.length === 0 ? (
          <EmptyState
            icon="recycling"
            title="Belum ada baris"
            message="Tambahkan kategori sampah yang akan disetor."
          />
        ) : null}
        <ul className="space-y-3">
          {priced.map(({ row, kategori, berat, poin }) => (
            <li key={row.key} className="p-4 rounded-xl bg-sand/60">
              <div className="grid grid-cols-1 sm:grid-cols-[1fr_120px_130px_40px] gap-3 items-end">
                <label className="block text-xs">
                  <span className="block font-semibold text-ink/70 mb-1">
                    Kategori Sampah
                  </span>
                  <select
                    aria-label="Kategori sampah"
                    value={row.kategoriId}
                    onChange={(event) =>
                      updateRow(row.key, { kategoriId: event.target.value })
                    }
                    className="w-full px-3 py-2.5 rounded-xl bg-card text-sm text-ink outline-none focus:ring-2 focus:ring-eco cursor-pointer"
                  >
                    <option value="">Pilih kategori…</option>
                    {catalog.map((k) => (
                      <option key={k.id} value={k.id}>
                        {k.namaKategori}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block text-xs">
                  <span className="block font-semibold text-ink/70 mb-1">
                    Estimasi Berat
                  </span>
                  <span className="flex items-center gap-1.5">
                    <input
                      type="number"
                      min="0"
                      step="0.1"
                      aria-label="Estimasi berat dalam Kg"
                      value={row.berat}
                      placeholder="0"
                      onChange={(event) =>
                        updateRow(row.key, { berat: event.target.value })
                      }
                      className="w-full px-3 py-2.5 rounded-xl bg-card text-sm text-ink text-right tabular-nums outline-none focus:ring-2 focus:ring-eco"
                    />
                    <span className="text-xs text-ink/60">Kg</span>
                  </span>
                </label>
                <p className="text-xs">
                  <span className="block font-semibold text-ink/70 mb-1">
                    Perkiraan Poin
                  </span>
                  <span className="block px-3 py-2.5 rounded-xl bg-card text-sm font-bold text-eco tabular-nums text-right">
                    {formatInt(poin)} Poin
                  </span>
                </p>
                <button
                  type="button"
                  aria-label="Hapus baris"
                  disabled={priced.length <= 1}
                  onClick={() => removeRow(row.key)}
                  className="p-2.5 rounded-xl text-danger hover:bg-danger/10 disabled:opacity-30 transition-colors justify-self-end"
                >
                  <Icon name="delete" size="sm" />
                </button>
              </div>
              {kategori ? (
                <p className="text-[11px] text-ink/50 mt-1.5 tabular-nums">
                  {formatInt(kategori.poinPerKg)} Poin/Kg
                  {Number.isFinite(berat) && berat > 0
                    ? ` × ${formatKg(berat)} Kg`
                    : ""}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={addRow}
          className="w-full py-3 rounded-xl bg-sand hover:bg-peach/50 text-eco text-sm font-bold transition-colors flex items-center justify-center gap-2"
        >
          <Icon name="add_circle" size="sm" />
          Tambah Kategori Sampah
        </button>

        <div>
          <label
            htmlFor="catatan"
            className="block font-display font-bold text-ink mb-1"
          >
            Catatan Tambahan (Opsional)
          </label>
          <p className="text-xs text-ink/60 mb-2">
            Tuliskan kondisi khusus kemasan atau detail lokasi
            penjemputan/penyerahan jika diperlukan.
          </p>
          <textarea
            id="catatan"
            rows={3}
            value={catatan}
            onChange={(event) => setCatatan(event.target.value)}
            placeholder="Contoh: Sampah plastik sudah dipilah dan dibersihkan dari label."
            className="w-full px-4 py-3 rounded-xl bg-sand/60 text-sm text-ink placeholder:text-ink/40 outline-none focus:ring-2 focus:ring-eco resize-y"
          />
        </div>

        <FormError message={error} />
        <div className="flex items-center justify-end gap-3">
          <Link
            href="/dashboard"
            className="px-6 py-3 rounded-full bg-sand hover:bg-peach/50 text-ink text-sm font-bold transition-colors"
          >
            Batal
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-eco hover:bg-eco-deep disabled:opacity-60 text-white text-sm font-bold transition-colors"
          >
            <Icon name="send" size="sm" />
            {submitting ? "Mengirim…" : "Kirim Permintaan Setor"}
          </button>
        </div>
      </div>

      <aside className="lg:col-span-4 rounded-2xl bg-card p-6 shadow-sm space-y-4 lg:sticky lg:top-6">
        <h2 className="flex items-center gap-2 font-display font-bold text-ink">
          <Icon name="receipt_long" size="sm" className="text-eco" />
          Ringkasan Estimasi
        </h2>
        <p className="flex items-baseline justify-between text-sm text-ink/70">
          Total Estimasi Berat
          <strong className="font-display font-extrabold text-2xl text-ink tabular-nums">
            {formatKg(totalBerat)}{" "}
            <span className="text-sm font-bold">Kg</span>
          </strong>
        </p>
        <p className="p-3 rounded-xl bg-gold/15 text-sm">
          <span className="block text-[11px] font-bold uppercase tracking-wider text-ink/60">
            Total Perkiraan Poin
          </span>
          <strong className="font-display font-extrabold text-2xl text-eco tabular-nums">
            {formatInt(totalPoin)} Poin
          </strong>
        </p>
        <p className="p-3 rounded-xl bg-sand/60 text-xs text-ink/70 flex gap-2">
          <Icon name="info" size="sm" className="text-info shrink-0" />
          Berat dan poin final akan diverifikasi kembali oleh admin bank
          sampah dengan timbangan digital saat serah terima.
        </p>
        <div>
          <p className="flex justify-between text-xs text-ink/70 mb-1.5">
            <span>Progress Pengisian</span>
            <strong>{progress}% Siap</strong>
          </p>
          <div className="w-full bg-sand rounded-full h-1.5 overflow-hidden">
            <div
              className="bg-success h-full rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </aside>
    </form>
  );
}
