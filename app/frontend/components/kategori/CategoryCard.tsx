import Link from "next/link";
import Icon from "@/components/ui/Icon";
import PhotoTile from "@/components/ui/PhotoTile";
import { WASTE_TYPE_LABELS } from "@/lib/constants/status";
import { formatInt, formatRp } from "@/lib/constants/format";
import type { Kategori } from "@/types/api";

export default function CategoryCard({ item }: { item: Kategori }) {
  return (
    <article className="rounded-2xl bg-card shadow-sm overflow-hidden flex flex-col">
      <div className="relative">
        <PhotoTile
          foto={item.foto}
          photoStatus={item.photoStatus}
          alt={item.namaKategori}
          icon="recycling"
          className="w-full h-40 rounded-none"
        />
        <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-eco-deep/90 text-white text-[11px] font-bold uppercase tracking-wider">
          {WASTE_TYPE_LABELS[item.jenis] ?? item.jenis}
        </span>
        <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-gold text-ink text-[11px] font-bold tabular-nums">
          {formatInt(item.poinPerKg)} Poin / Kg
        </span>
      </div>
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="font-display font-bold text-ink truncate">
          {item.namaKategori}
        </h3>
        <p className="text-sm text-ink/60">
          Harga Tebus{" "}
          <strong className="text-ink tabular-nums">
            {formatRp(item.hargaPerKg)}
          </strong>
          /Kg
        </p>
        <Link
          href={`/setor/baru?kategori=${item.id}`}
          className="mt-auto inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-eco hover:bg-eco-deep text-white text-sm font-bold transition-colors"
        >
          <Icon name="add_circle" size="sm" />
          Setor Jenis Ini
        </Link>
      </div>
    </article>
  );
}
