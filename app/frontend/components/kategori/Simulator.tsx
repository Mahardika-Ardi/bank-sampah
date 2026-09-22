"use client";

import { useState } from "react";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { formatInt, formatKg, formatRp } from "@/lib/constants/format";
import type { Kategori } from "@/types/api";

/**
 * Quick point estimator: pure client math over the loaded catalog.
 * Server recomputes the authoritative totals on submit.
 */
export default function Simulator({ items }: { items: Kategori[] }) {
  const [weights, setWeights] = useState<Record<string, string>>({});

  function setWeight(id: string, value: string) {
    setWeights((prev) => ({ ...prev, [id]: value }));
  }

  const rows = items
    .map((item) => {
      const kg = Number(weights[item.id] ?? 0);
      if (!Number.isFinite(kg) || kg <= 0) return null;
      return {
        item,
        kg,
        rupiah: item.hargaPerKg * kg,
        poin: item.poinPerKg * kg,
      };
    })
    .filter((row): row is NonNullable<typeof row> => row !== null);

  const totalRp = rows.reduce((sum, row) => sum + row.rupiah, 0);
  const totalPoin = rows.reduce((sum, row) => sum + row.poin, 0);
  const params = new URLSearchParams({
    items: rows.map((row) => `${row.item.id}:${row.kg}`).join(","),
  });

  return (
    <section className="rounded-2xl bg-card p-6 shadow-sm">
      <div className="flex items-center justify-between mb-1">
        <h2 className="flex items-center gap-2 font-display font-bold text-lg text-ink">
          <Icon name="calculate" className="text-eco" />
          Simulasi Kalkulator Cepat Estimasi Poin
        </h2>
        <span className="px-2 py-0.5 rounded-full bg-gold/20 text-eco text-[11px] font-bold uppercase tracking-wider">
          Estimasi
        </span>
      </div>
      <p className="text-sm text-ink/60 mb-4">
        Pilih material dan masukkan perkiraan timbangan di rumah untuk melihat
        proyeksi rupiah serta poin.
      </p>
      <ul className="space-y-2 max-h-72 overflow-y-auto pr-1">
        {items.map((item) => {
          const kg = Number(weights[item.id] ?? 0);
          const valid = Number.isFinite(kg) && kg > 0;
          return (
            <li
              key={item.id}
              className="flex items-center gap-3 p-3 rounded-xl bg-sand/60"
            >
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-ink truncate">
                  {item.namaKategori}
                </p>
                <p className="text-xs text-ink/60 tabular-nums">
                  {formatRp(item.hargaPerKg)}/Kg • {formatInt(item.poinPerKg)}{" "}
                  Poin/Kg
                </p>
              </div>
              <label className="flex items-center gap-1.5 text-sm">
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  aria-label={`Berat ${item.namaKategori} dalam Kg`}
                  value={weights[item.id] ?? ""}
                  placeholder="0"
                  onChange={(event) => setWeight(item.id, event.target.value)}
                  className="w-20 px-2.5 py-1.5 rounded-lg bg-card text-sm text-ink text-right tabular-nums outline-none focus:ring-2 focus:ring-eco"
                />
                <span className="text-xs text-ink/60">Kg</span>
              </label>
              <span className="text-sm font-bold text-ink tabular-nums w-24 text-right">
                {valid ? formatRp(item.hargaPerKg * kg) : formatRp(0)}
              </span>
            </li>
          );
        })}
      </ul>
      <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-4 border-t border-ink/10">
        <p className="text-sm text-ink/60">
          Total Nilai Kas{" "}
          <strong className="block font-display font-extrabold text-2xl text-ink tabular-nums">
            {formatRp(totalRp)}
          </strong>
        </p>
        <p className="text-sm text-ink/60">
          Perolehan Reward{" "}
          <strong className="block font-display font-extrabold text-2xl text-eco tabular-nums">
            {formatKg(totalPoin)} Poin
          </strong>
        </p>
        {rows.length > 0 ? (
          <Link
            href={`/setor/baru?${params.toString()}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-eco hover:bg-eco-deep text-white text-sm font-bold transition-colors"
          >
            Buat Formulir Setor
            <Icon name="arrow_forward" size="sm" />
          </Link>
        ) : null}
      </div>
    </section>
  );
}
