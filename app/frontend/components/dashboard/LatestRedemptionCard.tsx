import Link from "next/link";
import Icon from "@/components/ui/Icon";
import EmptyState from "@/components/ui/EmptyState";
import PhotoTile from "@/components/ui/PhotoTile";
import { statusLabel, statusTone } from "@/lib/constants/status";
import { formatDateTime, formatInt } from "@/lib/constants/format";
import type { MyPenukaranRow } from "@/types/api";

export default function LatestRedemptionCard({
  row,
}: {
  row: MyPenukaranRow | null;
}) {
  return (
    <section className="rounded-2xl bg-card shadow-sm overflow-hidden">
      <div className="flex items-center justify-between p-6 pb-4">
        <h2 className="flex items-center gap-2 font-display font-bold text-lg text-ink">
          <Icon name="redeem" className="text-eco" />
          Penukaran Hadiah
        </h2>
        <Link
          href="/tukar"
          className="text-sm font-bold text-eco hover:underline"
        >
          Semua
        </Link>
      </div>
      {row ? (
        <div className="px-6 pb-6 space-y-4">
          <div className="flex items-center justify-between text-xs">
            <span className="font-mono font-bold text-ink">
              {row.kodePenukaran}
            </span>
            <span
              className={`px-2 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider ${statusTone(row.status)}`}
            >
              {statusLabel(row.status)}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <PhotoTile
              foto={row.hadiah.foto}
              alt={row.hadiah.namaHadiah}
              icon="card_giftcard"
              className="w-16 h-16 rounded-xl"
            />
            <div className="min-w-0 flex-1">
              <p className="font-bold text-ink truncate">
                {row.hadiah.namaHadiah}
              </p>
              <p className="text-xs text-ink/60">
                {formatDateTime(row.tanggal)}
              </p>
            </div>
            <p className="font-display font-bold text-danger tabular-nums whitespace-nowrap">
              -{formatInt(row.poinTerpakai)} Poin
            </p>
          </div>
        </div>
      ) : (
        <EmptyState
          icon="redeem"
          title="Belum ada penukaran"
          message="Tukarkan poin Anda dengan hadiah menarik."
          action={
            <Link
              href="/hadiah"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold hover:bg-peach text-ink text-sm font-bold transition-colors"
            >
              <Icon name="card_giftcard" size="sm" />
              Lihat Katalog
            </Link>
          }
        />
      )}
    </section>
  );
}
