import { WASTE_TYPE_LABELS } from "@/lib/constants/status";
import { formatInt, formatKg, formatRp } from "@/lib/constants/format";
import type { RekapBody } from "@/types/api";

const JENIS_ORDER = ["plastik", "kertas", "logam", "kaca"];

export function RekapStatCards({ body }: { body: RekapBody }) {
  const tonase = body.rekapitulasiTonase;
  const tukar = body.rekapitulasiPenukaranPoin;
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="rounded-2xl bg-card p-5 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-wider text-ink/50">
          Total Tonase Terkumpul
        </p>
        <p className="font-display font-extrabold text-3xl text-ink tabular-nums mt-1">
          {formatKg(tonase.totalKg)}{" "}
          <span className="text-base font-bold">Kg</span>
        </p>
        <p className="text-xs text-ink/50 tabular-nums mt-0.5">
          ({formatKg(tonase.totalTon)} Ton)
        </p>
      </div>
      <div className="rounded-2xl bg-card p-5 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-wider text-ink/50">
          Estimasi Nilai Ekonomi
        </p>
        <p className="font-display font-extrabold text-3xl text-ink tabular-nums mt-1">
          {formatRp(tonase.totalEstimasiPembayaranRupiah)}
        </p>
        <p className="text-xs text-ink/50 mt-0.5">Valuasi komoditas daur ulang</p>
      </div>
      <div className="rounded-2xl bg-card p-5 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-wider text-ink/50">
          Total Poin Diterbitkan
        </p>
        <p className="font-display font-extrabold text-3xl text-gold tabular-nums mt-1">
          {formatInt(tonase.totalPoinDiterbitkan)}{" "}
          <span className="text-base font-bold">Poin</span>
        </p>
      </div>
      <div className="rounded-2xl bg-card p-5 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-wider text-ink/50">
          Poin Terealisasi / Ditukar
        </p>
        <p className="font-display font-extrabold text-3xl text-ink tabular-nums mt-1">
          {formatInt(tukar.totalPoinTerpakai)}{" "}
          <span className="text-base font-bold">Poin</span>
        </p>
        <p className="text-xs text-ink/50 tabular-nums mt-0.5">
          {formatInt(tukar.totalTransaksiPenukaran)} transaksi penukaran
        </p>
      </div>
    </div>
  );
}

export function BreakdownBars({
  breakdown,
}: {
  breakdown: RekapBody["breakdownJenisSampah"];
}) {
  const entries = JENIS_ORDER.filter((jenis) => breakdown[jenis]).map(
    (jenis) => ({ jenis, row: breakdown[jenis] }),
  );
  const total = entries.reduce((sum, e) => sum + e.row.tonaseKg, 0);
  if (entries.length === 0) {
    return <p className="text-sm text-ink/60">Belum ada data komposisi.</p>;
  }
  return (
    <ul className="space-y-3">
      {entries.map(({ jenis, row }) => {
        const pct = total > 0 ? Math.round((row.tonaseKg / total) * 100) : 0;
        return (
          <li key={jenis}>
            <p className="flex justify-between text-sm mb-1">
              <span className="font-semibold text-ink">
                {WASTE_TYPE_LABELS[jenis] ?? jenis}
              </span>
              <span className="tabular-nums text-ink/70">
                {formatKg(row.tonaseKg)} Kg ({pct}%) • {formatRp(row.rupiah)} •{" "}
                {formatInt(row.poin)} Poin
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
  );
}
