"use client";

import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { FormError } from "@/components/form/fields";
import { Skeleton } from "@/components/ui/Skeleton";
import { statusLabel, statusTone } from "@/lib/constants/status";
import { formatDateTime, formatInt, formatKg } from "@/lib/constants/format";
import { useSelectedBank } from "@/hooks/bank/useSelectedBank";
import { useSetorDetail } from "@/hooks/setor/useSetorDetail";

export default function SetorReceipt({ id }: { id: string }) {
  const { bank } = useSelectedBank();
  const { data, error } = useSetorDetail(id);

  if (error) {
    return (
      <div className="rounded-2xl bg-card p-6 shadow-sm">
        <FormError message={error} />
        <Link
          href="/setor"
          className="mt-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sand hover:bg-peach/50 text-ink text-sm font-bold transition-colors"
        >
          <Icon name="arrow_back" size="sm" />
          Kembali ke Riwayat
        </Link>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="space-y-3">
        <Skeleton className="h-12" />
        <Skeleton className="h-64" />
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4 pb-8">
      <div className="flex items-center justify-between no-print">
        <Link
          href="/setor"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-eco hover:underline"
        >
          <Icon name="arrow_back" size="sm" />
          Kembali ke Riwayat
        </Link>
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-eco hover:bg-eco-deep text-white text-sm font-bold transition-colors"
        >
          <Icon name="print" size="sm" />
          Cetak Bukti Setor
        </button>
      </div>

      <article className="rounded-2xl bg-card shadow-sm overflow-hidden">
        <div className="p-6 border-b border-ink/10">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-display font-bold text-lg text-ink">
                {bank?.namaApp ?? "Bank Sampah"}
              </p>
              <p className="text-xs text-ink/60">Bukti Setor Resmi</p>
            </div>
            <span
              className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${statusTone(data.status)}`}
            >
              {statusLabel(data.status)}
            </span>
          </div>
          <div className="mt-4 p-4 rounded-xl bg-sand/60">
            <p className="text-[11px] font-bold uppercase tracking-wider text-ink/50">
              Kode Transaksi
            </p>
            <p className="font-mono font-bold text-xl text-ink">
              {data.kodeSetor}
            </p>
            <p className="text-sm text-ink/60 mt-0.5">
              {formatDateTime(data.tanggal)}
            </p>
          </div>
        </div>

        <div className="p-6 border-b border-ink/10">
          <p className="text-[11px] font-bold uppercase tracking-wider text-ink/50 mb-2">
            Informasi Nasabah
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <p>
              <span className="block text-xs text-ink/50">Nama Lengkap</span>
              <strong className="text-ink">{data.nasabah.namaNasabah}</strong>
            </p>
            <p>
              <span className="block text-xs text-ink/50">Kontak</span>
              <strong className="text-ink">{data.nasabah.telp}</strong>
              <span className="block text-xs text-ink/60">
                {data.nasabah.alamat}
              </span>
            </p>
            <p>
              <span className="block text-xs text-ink/50">Total Poin</span>
              <strong className="font-display font-extrabold text-xl text-eco tabular-nums">
                +{formatInt(data.totalPoin)} Poin
              </strong>
            </p>
          </div>
        </div>

        <div className="p-6">
          <p className="text-[11px] font-bold uppercase tracking-wider text-ink/50 mb-2">
            Rincian Penimbangan Sampah
          </p>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-ink/50 border-b border-ink/10">
                <th className="py-2 pr-2 font-semibold">No</th>
                <th className="py-2 pr-2 font-semibold">Kategori Sampah</th>
                <th className="py-2 pr-2 font-semibold">Jenis</th>
                <th className="py-2 pr-2 font-semibold text-right">Berat (Kg)</th>
                <th className="py-2 pr-2 font-semibold text-right">Poin/Kg</th>
                <th className="py-2 font-semibold text-right">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {data.detailSetors.map((item, index) => (
                <tr key={`${item.kategori}-${index}`} className="border-b border-ink/5 last:border-0">
                  <td className="py-2.5 pr-2 text-ink/50 tabular-nums">{index + 1}</td>
                  <td className="py-2.5 pr-2 font-semibold text-ink">{item.kategori}</td>
                  <td className="py-2.5 pr-2 text-ink/60">{item.jenis}</td>
                  <td className="py-2.5 pr-2 text-right tabular-nums">{formatKg(item.beratKg)}</td>
                  <td className="py-2.5 pr-2 text-right tabular-nums">{formatInt(item.poinPerKg)}</td>
                  <td className="py-2.5 text-right font-bold text-eco tabular-nums">
                    +{formatInt(item.subtotalPoin)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-3 p-4 rounded-xl bg-eco-deep text-white flex items-center justify-between">
            <span className="font-bold">Total Akumulasi Setor</span>
            <span className="font-display font-extrabold tabular-nums">
              {formatKg(data.totalBeratKg)} Kg
            </span>
            <span className="font-display font-extrabold text-gold tabular-nums">
              +{formatInt(data.totalPoin)} Poin
            </span>
          </div>
          {data.catatanAdmin ? (
            <div className="mt-4 p-4 rounded-xl bg-sand/60">
              <p className="flex items-center gap-1.5 text-sm font-bold text-ink mb-1">
                <Icon name="verified" size="sm" className="text-success" />
                Catatan Petugas Verifikasi
              </p>
              <p className="text-sm text-ink/80 italic">“{data.catatanAdmin}”</p>
            </div>
          ) : null}
        </div>
      </article>
      <p className="text-center text-xs text-ink/50 no-print">
        Terima kasih atas kontribusi Anda dalam menjaga kelestarian lingkungan.
      </p>
    </div>
  );
}
