"use client";

import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { FormError } from "@/components/form/fields";
import { SkeletonCard } from "@/components/ui/Skeleton";
import { statusLabel, statusTone, WASTE_TYPE_LABELS } from "@/lib/constants/status";
import { currentMonth, formatDateTime, formatInt, formatKg } from "@/lib/constants/format";
import { useDashboardStats } from "@/hooks/admin/useDashboardStats";
import { useAdminSetors } from "@/hooks/admin/useAdminSetors";
import { useAdminPenukaran } from "@/hooks/admin/useAdminPenukaran";
import { useHadiahList } from "@/hooks/hadiah/useHadiahList";
import { useRekapBulanan } from "@/hooks/admin/useRekap";
import type { AdminSetorRow } from "@/types/api";

const JENIS_ORDER = ["plastik", "kertas", "logam", "kaca"];
const LOW_STOCK_LIMIT = 5;

function AdminStatCard({
  title,
  value,
  unit,
  sub,
  icon,
  iconTone,
  highlight,
}: {
  title: string;
  value: string;
  unit?: string;
  sub?: string;
  icon: string;
  iconTone: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-5 shadow-sm flex flex-col gap-3 ${highlight ? "bg-gold/15" : "bg-card"}`}
    >
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-bold uppercase tracking-wider text-ink/50">
          {title}
        </span>
        <span
          className={`w-9 h-9 rounded-full flex items-center justify-center ${iconTone}`}
        >
          <Icon name={icon} size="sm" />
        </span>
      </div>
      <p className="flex items-baseline gap-1.5">
        <span className="font-display font-extrabold text-3xl text-ink tabular-nums">
          {value}
        </span>
        {unit ? (
          <span className="text-sm font-bold text-ink/60">{unit}</span>
        ) : null}
      </p>
      {sub ? <p className="text-xs text-ink/60">{sub}</p> : null}
    </div>
  );
}

function QueuePreview({ rows }: { rows: AdminSetorRow[] }) {
  const pending = rows.filter(
    (row) => row.status === "menunggu_konfirmasi" || row.status === "diverifikasi",
  );
  const preview = pending.slice(0, 4);
  return (
    <section className="rounded-2xl bg-card p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="font-display font-bold text-lg text-ink">
            Antrean Verifikasi Timbangan
          </h2>
          <p className="text-xs text-ink/60">
            Pengajuan setoran yang membutuhkan verifikasi fisik.
          </p>
        </div>
        <Link
          href="/admin/verifikasi"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-sand hover:bg-peach/50 text-eco text-sm font-bold transition-colors whitespace-nowrap"
        >
          Buka Antrean Lengkap
          <Icon name="arrow_forward" size="sm" />
        </Link>
      </div>
      {preview.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-xl">
            <thead>
              <tr className="text-left text-[11px] uppercase tracking-wider text-ink/50 border-b border-ink/10">
                <th className="py-2 pr-3 font-bold">ID Setoran</th>
                <th className="py-2 pr-3 font-bold">Nasabah</th>
                <th className="py-2 pr-3 font-bold">Waktu Masuk</th>
                <th className="py-2 pr-3 font-bold text-right">Estimasi Berat</th>
                <th className="py-2 pr-3 font-bold">Status</th>
                <th className="py-2 font-bold text-right">Tindakan</th>
              </tr>
            </thead>
            <tbody>
              {preview.map((row) => (
                <tr key={row.id} className="border-b border-ink/5 last:border-0">
                  <td className="py-2.5 pr-3 font-mono text-xs font-bold text-ink">
                    {row.kodeSetor}
                  </td>
                  <td className="py-2.5 pr-3 font-semibold text-ink">
                    {row.nasabah.namaNasabah}
                  </td>
                  <td className="py-2.5 pr-3 text-ink/60 text-xs whitespace-nowrap">
                    {formatDateTime(row.tanggal)}
                  </td>
                  <td className="py-2.5 pr-3 text-right font-bold tabular-nums">
                    {formatKg(row.totalBeratKg)} Kg
                  </td>
                  <td className="py-2.5 pr-3">
                    <span
                      className={`px-2 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider whitespace-nowrap ${statusTone(row.status)}`}
                    >
                      {statusLabel(row.status)}
                    </span>
                  </td>
                  <td className="py-2.5 text-right">
                    <Link
                      href={`/admin/verifikasi?id=${row.id}`}
                      className="inline-flex px-4 py-1.5 rounded-full bg-eco hover:bg-eco-deep text-white text-xs font-bold transition-colors"
                    >
                      Verifikasi
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-sm text-ink/60 py-4 text-center">
          Antrean kosong. Semua pengajuan sudah ditangani.
        </p>
      )}
    </section>
  );
}

const QUICK_ACTIONS = [
  { href: "/admin/nasabah", label: "Daftar Nasabah Baru", icon: "person_add" },
  { href: "/admin/kategori", label: "Kelola Harga / Kg", icon: "sell" },
  { href: "/admin/hadiah", label: "Stok Sembako Gudang", icon: "inventory_2" },
  { href: "/admin/rekap", label: "Cetak Rekap & Nota", icon: "print" },
];

export default function AdminDashboardPage() {
  const { data: stats, error: statsError, retry } = useDashboardStats();
  const { rows: queue } = useAdminSetors();
  const { rows: tukars } = useAdminPenukaran();
  const { items: hadiah } = useHadiahList();
  const { data: rekap } = useRekapBulanan(currentMonth());

  const pending = queue
    ? queue.filter(
        (row) =>
          row.status === "menunggu_konfirmasi" || row.status === "diverifikasi",
      )
    : null;
  const menungguCount = pending
    ? pending.filter((row) => row.status === "menunggu_konfirmasi").length
    : 0;
  const diverifikasiCount = pending
    ? pending.filter((row) => row.status === "diverifikasi").length
    : 0;
  const lowStock = hadiah ? hadiah.filter((h) => h.stok <= LOW_STOCK_LIMIT) : null;
  const breakdown = rekap?.breakdownJenisSampah ?? null;
  const breakdownTotal = breakdown
    ? Object.values(breakdown).reduce((sum, row) => sum + row.tonaseKg, 0)
    : 0;

  return (
    <div className="w-full space-y-6 pb-8">
      <div className="space-y-1">
        <p className="text-xs font-bold uppercase tracking-wider text-muted">
          Admin Bank • Dashboard Utama
        </p>
        <h1 className="font-display font-extrabold text-3xl text-ink tracking-tight">
          Dashboard Operasional Bank Sampah
        </h1>
        <p className="text-sm text-ink/60">
          Monitoring arus setoran, perputaran poin, dan antrean verifikasi.
        </p>
      </div>

      {!stats && !statsError ? (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      ) : null}
      {statsError ? (
        <div className="rounded-2xl bg-card p-6 shadow-sm">
          <FormError message={statsError} />
          <button
            type="button"
            onClick={retry}
            className="mt-3 px-5 py-2.5 rounded-full bg-eco hover:bg-eco-deep text-white text-sm font-bold transition-colors"
          >
            Coba Lagi
          </button>
        </div>
      ) : null}
      {stats ? (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
          <AdminStatCard
            title="Nasabah Aktif"
            value={formatInt(stats.totalNasabah)}
            icon="group"
            iconTone="bg-eco/10 text-eco"
          />
          <AdminStatCard
            title="Total Sampah"
            value={formatKg(stats.totalBeratSampahKg / 1000)}
            unit="Ton"
            sub={`${formatKg(stats.totalBeratSampahKg)} Kg`}
            icon="delete_sweep"
            iconTone="bg-eco/10 text-eco"
          />
          <AdminStatCard
            title="Poin Beredar"
            value={formatInt(stats.totalPoinTersalurkan)}
            icon="savings"
            iconTone="bg-gold/20 text-eco"
          />
          <AdminStatCard
            title="Perlu Validasi"
            value={pending ? formatInt(pending.length) : "…"}
            unit="Tiket"
            sub={
              pending
                ? `${menungguCount} Pending, ${diverifikasiCount} Diverifikasi`
                : undefined
            }
            icon="hourglass_top"
            iconTone="bg-gold/20 text-eco"
            highlight
          />
          <AdminStatCard
            title="Komoditas"
            value={formatInt(stats.totalKategoriSampah)}
            unit="Jenis"
            sub="Semua harga aktif terbaru"
            icon="inventory_2"
            iconTone="bg-eco/10 text-eco"
          />
          <AdminStatCard
            title="Klaim Hadiah"
            value={tukars ? formatInt(tukars.length) : "…"}
            unit="Klaim"
            icon="redeem"
            iconTone="bg-info/15 text-info"
          />
        </div>
      ) : null}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8">
          {queue ? <QueuePreview rows={queue} /> : null}
        </div>
        <div className="lg:col-span-4 space-y-6">
          <section className="rounded-2xl bg-card p-6 shadow-sm">
            <h2 className="font-display font-bold text-ink mb-1">
              Aksi Cepat Operasional
            </h2>
            <p className="text-xs text-ink/60 mb-4">
              Pintas konfigurasi master data dan administrasi unit.
            </p>
            <div className="grid grid-cols-2 gap-2.5">
              {QUICK_ACTIONS.map((action) => (
                <Link
                  key={action.href}
                  href={action.href}
                  className="flex flex-col gap-2 p-3.5 rounded-xl bg-sand hover:bg-peach/50 transition-colors"
                >
                  <span className="w-9 h-9 rounded-lg bg-eco text-white flex items-center justify-center">
                    <Icon name={action.icon} size="sm" />
                  </span>
                  <span className="text-sm font-bold text-ink leading-tight">
                    {action.label}
                  </span>
                </Link>
              ))}
            </div>
          </section>
          <section className="rounded-2xl bg-card p-6 shadow-sm">
            <h2 className="font-display font-bold text-ink mb-3">
              Perhatian Inventaris Hadiah
            </h2>
            {lowStock === null ? (
              <p className="text-sm text-ink/60">Memuat…</p>
            ) : lowStock.length > 0 ? (
              <ul className="space-y-2">
                {lowStock.slice(0, 5).map((h) => (
                  <li
                    key={h.id}
                    className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-danger/5 text-sm"
                  >
                    <span className="font-semibold text-ink truncate">
                      {h.namaHadiah}
                    </span>
                    <span className="font-bold text-danger tabular-nums whitespace-nowrap">
                      Sisa {formatInt(h.stok)}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-ink/60">
                Semua stok hadiah dalam batas aman.
              </p>
            )}
          </section>
        </div>
      </div>

      <section className="rounded-2xl bg-card p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="font-display font-bold text-lg text-ink">
              Ringkasan Komoditas Terkumpul
            </h2>
            <p className="text-xs text-ink/60">
              Sebaran tonase material bulan berjalan.
            </p>
          </div>
          <span className="text-xs font-bold text-ink/60 tabular-nums">
            Total: {formatKg(breakdownTotal)} Kg
          </span>
        </div>
        {breakdown ? (
          <ul className="space-y-3">
            {JENIS_ORDER.filter((jenis) => breakdown[jenis]).map((jenis) => {
              const row = breakdown[jenis];
              const pct =
                breakdownTotal > 0
                  ? Math.round((row.tonaseKg / breakdownTotal) * 100)
                  : 0;
              return (
                <li key={jenis}>
                  <p className="flex justify-between text-sm mb-1">
                    <span className="font-semibold text-ink">
                      {WASTE_TYPE_LABELS[jenis] ?? jenis}
                    </span>
                    <span className="tabular-nums text-ink/70">
                      {formatKg(row.tonaseKg)} Kg ({pct}%)
                    </span>
                  </p>
                  <div className="w-full bg-sand rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-success h-full rounded-full"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="text-sm text-ink/60">Memuat rekap bulan berjalan…</p>
        )}
      </section>
    </div>
  );
}
