import Icon from "@/components/ui/Icon";
import { WASTE_TYPE_LABELS } from "@/lib/constants/status";
import type { Kategori } from "@/types/api";

export type KategoriSort =
  | "poin-desc"
  | "poin-asc"
  | "harga-desc"
  | "harga-asc";

const SORT_LABELS: Record<KategoriSort, string> = {
  "poin-desc": "Poin Tertinggi",
  "poin-asc": "Poin Terendah",
  "harga-desc": "Harga Tertinggi",
  "harga-asc": "Harga Terendah",
};

export function filterKategori(
  items: Kategori[],
  query: string,
  jenis: string,
  sort: KategoriSort,
): Kategori[] {
  const q = query.trim().toLowerCase();
  const filtered = items.filter((item) => {
    if (jenis !== "semua" && item.jenis !== jenis) return false;
    if (q && !item.namaKategori.toLowerCase().includes(q)) return false;
    return true;
  });
  const sorted = [...filtered];
  switch (sort) {
    case "poin-asc":
      sorted.sort((a, b) => a.poinPerKg - b.poinPerKg);
      break;
    case "harga-desc":
      sorted.sort((a, b) => b.hargaPerKg - a.hargaPerKg);
      break;
    case "harga-asc":
      sorted.sort((a, b) => a.hargaPerKg - b.hargaPerKg);
      break;
    case "poin-desc":
    default:
      sorted.sort((a, b) => b.poinPerKg - a.poinPerKg);
      break;
  }
  return sorted;
}

export function jenisOptions(items: Kategori[]): { value: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const item of items) counts.set(item.jenis, (counts.get(item.jenis) ?? 0) + 1);
  return [...counts.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([value, count]) => ({ value, count }));
}

export default function CategoryFilters({
  query,
  onQuery,
  jenis,
  onJenis,
  options,
  total,
  sort,
  onSort,
}: {
  query: string;
  onQuery: (value: string) => void;
  jenis: string;
  onJenis: (value: string) => void;
  options: { value: string; count: number }[];
  total: number;
  sort: KategoriSort;
  onSort: (value: KategoriSort) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        type="button"
        onClick={() => onJenis("semua")}
        className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
          jenis === "semua"
            ? "bg-eco text-white"
            : "bg-card text-ink hover:bg-peach/50"
        }`}
      >
        Semua Kategori ({total})
      </button>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onJenis(option.value)}
          className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
            jenis === option.value
              ? "bg-eco text-white"
              : "bg-card text-ink hover:bg-peach/50"
          }`}
        >
          {WASTE_TYPE_LABELS[option.value] ?? option.value} ({option.count})
        </button>
      ))}
      <span className="flex-1" />
      <label className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted">
          <Icon name="search" size="sm" />
        </span>
        <input
          type="search"
          aria-label="Cari kategori"
          placeholder="Cari jenis botol, kertas, kaleng…"
          value={query}
          onChange={(event) => onQuery(event.target.value)}
          className="pl-9 pr-3 py-2 rounded-full bg-card text-sm text-ink placeholder:text-ink/40 outline-none focus:ring-2 focus:ring-eco w-56"
        />
      </label>
      <label className="flex items-center gap-1.5 text-sm font-semibold text-ink/70">
        Urutkan:
        <select
          aria-label="Urutkan kategori"
          value={sort}
          onChange={(event) => onSort(event.target.value as KategoriSort)}
          className="px-3 py-2 rounded-full bg-card text-sm font-bold text-ink outline-none focus:ring-2 focus:ring-eco cursor-pointer"
        >
          {(Object.keys(SORT_LABELS) as KategoriSort[]).map((value) => (
            <option key={value} value={value}>
              {SORT_LABELS[value]}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
