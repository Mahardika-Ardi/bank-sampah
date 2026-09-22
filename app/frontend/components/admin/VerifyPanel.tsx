"use client";

import { useMemo, useState } from "react";
import Icon from "@/components/ui/Icon";
import { FormError } from "@/components/form/fields";
import { Skeleton } from "@/components/ui/Skeleton";
import { statusLabel, statusTone } from "@/lib/constants/status";
import { formatDateTime, formatInt, formatKg } from "@/lib/constants/format";
import { verifySetor, type VerifyStatus } from "@/lib/api/admin";
import { useKategoriList } from "@/hooks/kategori/useKategoriList";
import { useSetorDetail } from "@/hooks/setor/useSetorDetail";
import { ApiError } from "@/lib/api/client";

const VERIFY_ACTIONS: { status: VerifyStatus; label: string; primary?: boolean }[] = [
  { status: "ditolak", label: "Tolak Setoran" },
  { status: "diverifikasi", label: "Simpan Tahap Verifikasi" },
  { status: "selesai", label: "Selesaikan & Terbitkan Poin", primary: true },
];

/**
 * Verification workbench for one deposit: real-weight inputs per item
 * with live point recompute, required admin note, and the three
 * backend status transitions. Category names resolve to ids against
 * the loaded catalog; unmatched rows block submission honestly.
 */
export default function VerifyPanel({
  setorId,
  onVerified,
}: {
  setorId: string;
  onVerified: () => void;
}) {
  const { data: detail, error: loadError } = useSetorDetail(setorId);
  const { items: catalog } = useKategoriList();
  const [weights, setWeights] = useState<Record<string, string>>({});
  const [catatan, setCatatan] = useState("");
  const [submitting, setSubmitting] = useState<VerifyStatus | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState<string | null>(null);

  const resolved = useMemo(() => {
    if (!detail || !catalog) return null;
    const byName = new Map(catalog.map((k) => [k.namaKategori, k]));
    return detail.detailSetors.map((item, index) => {
      const kategori = byName.get(item.kategori) ?? null;
      const raw = weights[`${index}`];
      const real = raw === undefined || raw === "" ? item.beratKg : Number(raw);
      return {
        item,
        index,
        kategori,
        real,
        realValid: Number.isFinite(real) && real >= 0,
        poin: kategori && Number.isFinite(real) && real >= 0 ? kategori.poinPerKg * real : 0,
      };
    });
  }, [detail, catalog, weights]);

  // NOTE: parent renders <VerifyPanel key={setorId}> so state is fresh
  // per selection — no reset effect needed.

  if (loadError) {
    return (
      <div className="rounded-2xl bg-card p-6 shadow-sm">
        <FormError message={loadError} />
      </div>
    );
  }

  if (!detail || !resolved) {
    return (
      <div className="rounded-2xl bg-card p-6 shadow-sm space-y-3">
        <Skeleton className="h-6 w-1/2" />
        <Skeleton className="h-32" />
        <Skeleton className="h-24" />
      </div>
    );
  }

  const unmatched = resolved.filter((r) => r.kategori === null);
  const invalid = resolved.filter((r) => !r.realValid);
  const totalReal = resolved.reduce((sum, r) => sum + (r.realValid ? r.real : 0), 0);
  const totalPoin = resolved.reduce((sum, r) => sum + r.poin, 0);

  async function submit(status: VerifyStatus) {
    setError(null);
    setDone(null);
    if (!resolved) return;
    if (!catatan.trim()) {
      setError("Catatan petugas wajib diisi untuk setiap verifikasi.");
      return;
    }
    if (unmatched.length > 0) {
      setError(
        `Kategori tidak dikenali di katalog: ${unmatched.map((r) => r.item.kategori).join(", ")}.`,
      );
      return;
    }
    if (invalid.length > 0) {
      setError("Berat riil harus berupa angka nol atau lebih.");
      return;
    }
    setSubmitting(status);
    try {
      await verifySetor(setorId, {
        status,
        catatanAdmin: catatan.trim(),
        itemsReal: resolved.flatMap((r) =>
          r.kategori
            ? [{ kategoriSampahId: r.kategori.id, beratKgReal: r.real }]
            : [],
        ),
      });
      setDone(
        status === "selesai"
          ? `Setoran diselesaikan. ${formatInt(totalPoin)} poin diterbitkan.`
          : status === "diverifikasi"
            ? "Tahap verifikasi disimpan."
            : "Setoran ditolak.",
      );
      onVerified();
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Verifikasi gagal. Coba lagi.");
    } finally {
      setSubmitting(null);
    }
  }

  return (
    <div className="rounded-2xl bg-card p-6 shadow-sm space-y-5 lg:sticky lg:top-6">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <h2 className="font-display font-bold text-lg text-ink">
            Verifikasi Setoran #{detail.kodeSetor}
          </h2>
          <p className="text-xs text-ink/60">
            {formatDateTime(detail.tanggal)} • {detail.nasabah.namaNasabah}
          </p>
        </div>
        <span
          className={`px-2 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider ${statusTone(detail.status)}`}
        >
          {statusLabel(detail.status)}
        </span>
      </div>

      <div>
        <p className="text-sm font-bold text-ink mb-2">
          Tabel Timbang Riil Fisik
          <span className="block text-xs font-normal text-ink/60">
            Kosongkan untuk memakai berat estimasi pengaju.
          </span>
        </p>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-[11px] uppercase tracking-wider text-ink/50 border-b border-ink/10">
              <th className="py-2 pr-2 font-bold">Kategori</th>
              <th className="py-2 pr-2 font-bold text-right">Est. Awal</th>
              <th className="py-2 pr-2 font-bold text-right">Bobot Riil (Kg)</th>
              <th className="py-2 font-bold text-right">Poin</th>
            </tr>
          </thead>
          <tbody>
            {resolved.map((r) => (
              <tr key={r.index} className="border-b border-ink/5 last:border-0">
                <td className="py-2 pr-2">
                  <p className="font-semibold text-ink">{r.item.kategori}</p>
                  <p className="text-xs text-ink/50">{r.item.jenis}</p>
                </td>
                <td className="py-2 pr-2 text-right tabular-nums text-ink/70">
                  {formatKg(r.item.beratKg)}
                </td>
                <td className="py-2 pr-2">
                  <input
                    type="number"
                    min="0"
                    step="0.1"
                    aria-label={`Bobot riil ${r.item.kategori}`}
                    value={weights[`${r.index}`] ?? ""}
                    placeholder={formatKg(r.item.beratKg)}
                    onChange={(event) =>
                      setWeights((prev) => ({
                        ...prev,
                        [`${r.index}`]: event.target.value,
                      }))
                    }
                    className="w-24 px-2.5 py-1.5 rounded-lg bg-sand text-sm text-ink text-right tabular-nums outline-none focus:ring-2 focus:ring-eco ml-auto block"
                  />
                </td>
                <td className="py-2 text-right font-bold text-eco tabular-nums">
                  {formatInt(r.poin)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 rounded-xl bg-sand/60 flex flex-wrap items-center justify-between gap-2 text-sm">
        <span className="text-ink/70">
          Total Bobot Riil{" "}
          <strong className="text-ink tabular-nums">{formatKg(totalReal)} Kg</strong>
        </span>
        <span className="font-display font-extrabold text-eco tabular-nums">
          {formatInt(totalPoin)} Poin
        </span>
      </div>

      <div>
        <label htmlFor="catatanAdmin" className="block text-sm font-bold text-ink mb-1.5">
          Catatan Petugas Verifikasi (Wajib)
        </label>
        <textarea
          id="catatanAdmin"
          rows={3}
          value={catatan}
          onChange={(event) => setCatatan(event.target.value)}
          placeholder="Contoh: Kondisi kaleng bersih tanpa residu cair."
          className="w-full px-4 py-3 rounded-xl bg-sand/60 text-sm text-ink placeholder:text-ink/40 outline-none focus:ring-2 focus:ring-eco resize-y"
        />
      </div>

      <FormError message={error} />
      {done ? (
        <p role="status" className="p-3 rounded-xl bg-success/10 text-success text-sm font-medium">
          {done}
        </p>
      ) : null}

      <div className="flex flex-wrap gap-2.5">
        {VERIFY_ACTIONS.map((action) => (
          <button
            key={action.status}
            type="button"
            disabled={submitting !== null}
            onClick={() => void submit(action.status)}
            className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-bold transition-colors disabled:opacity-60 ${
              action.primary
                ? "bg-eco hover:bg-eco-deep text-white"
                : action.status === "ditolak"
                  ? "bg-danger/10 hover:bg-danger/20 text-danger"
                  : "bg-sand hover:bg-peach/50 text-ink"
            }`}
          >
            <Icon
              name={
                action.status === "ditolak"
                  ? "cancel"
                  : action.status === "diverifikasi"
                    ? "save"
                    : "verified"
              }
              size="sm"
            />
            {submitting === action.status ? "Memproses…" : action.label}
          </button>
        ))}
      </div>
    </div>
  );
}
