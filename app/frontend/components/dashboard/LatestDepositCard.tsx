import Link from "next/link";
import Icon from "@/components/ui/Icon";
import EmptyState from "@/components/ui/EmptyState";
import { statusLabel, statusTone } from "@/lib/constants/status";
import { formatDateTime, formatInt, formatKg } from "@/lib/constants/format";
import type { MySetorRow } from "@/types/api";

export default function LatestDepositCard({ row }: { row: MySetorRow | null }) {
  return (
    <section className="rounded-2xl bg-card shadow-sm overflow-hidden">
      <div className="flex items-center justify-between p-6 pb-4">
        <h2 className="flex items-center gap-2 font-display font-bold text-lg text-ink">
          <Icon name="history" className="text-eco" />
          Setoran Sampah Terkini
        </h2>
        <Link
          href="/setor"
          className="flex items-center gap-1 text-sm font-bold text-eco hover:underline"
        >
          Lihat Semua Setoran
          <Icon name="arrow_forward" size="sm" />
        </Link>
      </div>
      {row ? (
        <div className="px-6 pb-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 p-4 rounded-xl bg-sand/60">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-eco/10 text-eco flex items-center justify-center">
                <Icon name="receipt" size="sm" />
              </span>
              <div>
                <p className="text-sm font-mono font-bold text-ink">
                  {row.kodeSetor}
                </p>
                <p className="text-xs text-ink/60">
                  {formatDateTime(row.tanggal)}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`px-2 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider ${statusTone(row.status)}`}
              >
                {statusLabel(row.status)}
              </span>
              <span className="font-display font-extrabold text-success tabular-nums">
                +{formatInt(row.totalPoin)} Poin
              </span>
            </div>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {row.detailSetors.map((item) => (
              <li
                key={item.kategoriSampahId}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-sand/60"
              >
                <span className="w-10 h-10 rounded-lg bg-eco/10 text-eco flex items-center justify-center shrink-0">
                  <Icon name="scale" size="sm" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-ink truncate">
                    {item.kategoriSampah.namaKategori}
                  </p>
                  <p className="text-xs text-ink/60">
                    Berat:{" "}
                    <strong className="text-ink">
                      {formatKg(item.beratKg)} Kg
                    </strong>{" "}
                    •{" "}
                    <span className="text-eco font-bold">
                      {formatInt(item.subtotalPoin)} Poin
                    </span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <Link
            href={`/setor/${row.id}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sand hover:bg-peach/60 text-eco text-sm font-semibold transition-colors"
          >
            <Icon name="print" size="sm" />
            Lihat Rincian / Cetak Nota
          </Link>
        </div>
      ) : (
        <EmptyState
          icon="history"
          title="Belum ada setoran"
          message="Setoran sampah pertama Anda akan muncul di sini."
          action={
            <Link
              href="/setor/baru"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-eco hover:bg-eco-deep text-white text-sm font-bold transition-colors"
            >
              <Icon name="add_circle" size="sm" />
              Setor Sekarang
            </Link>
          }
        />
      )}
    </section>
  );
}
