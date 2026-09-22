"use client";

import { useMemo, useState } from "react";
import CategoryCard from "@/components/kategori/CategoryCard";
import CategoryFilters, {
  filterKategori,
  jenisOptions,
  type KategoriSort,
} from "@/components/kategori/CategoryFilters";
import Simulator from "@/components/kategori/Simulator";
import EmptyState from "@/components/ui/EmptyState";
import { FormError } from "@/components/form/fields";
import { SkeletonCard } from "@/components/ui/Skeleton";
import { useKategoriList } from "@/hooks/kategori/useKategoriList";

export default function KategoriPage() {
  const { items, error, retry } = useKategoriList();
  const [query, setQuery] = useState("");
  const [jenis, setJenis] = useState("semua");
  const [sort, setSort] = useState<KategoriSort>("poin-desc");

  const options = useMemo(() => (items ? jenisOptions(items) : []), [items]);
  const visible = useMemo(
    () => (items ? filterKategori(items, query, jenis, sort) : []),
    [items, query, jenis, sort],
  );

  return (
    <div className="w-full space-y-6 pb-8">
      <div className="space-y-1">
        <p className="text-xs font-bold uppercase tracking-wider text-muted">
          Unit bank • Standar harga resmi
        </p>
        <h1 className="font-display font-extrabold text-3xl text-ink tracking-tight">
          Katalog Kategori Sampah &amp; Konversi Nilai
        </h1>
        <p className="text-sm text-ink/60">
          Informasi jenis sampah daur ulang terverifikasi, harga tebus tunai
          per Kg, dan perolehan poin hijau.
        </p>
      </div>

      {!items && !error ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      ) : null}
      {error ? (
        <div className="rounded-2xl bg-card p-6 shadow-sm">
          <FormError message={error} />
          <button
            type="button"
            onClick={retry}
            className="mt-3 px-5 py-2.5 rounded-full bg-eco hover:bg-eco-deep text-white text-sm font-bold transition-colors"
          >
            Coba Lagi
          </button>
        </div>
      ) : null}
      {items ? (
        <>
          <CategoryFilters
            query={query}
            onQuery={setQuery}
            jenis={jenis}
            onJenis={setJenis}
            options={options}
            total={items.length}
            sort={sort}
            onSort={setSort}
          />
          {visible.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {visible.map((item) => (
                <CategoryCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl bg-card shadow-sm">
              <EmptyState
                icon="search_off"
                title="Tidak ada kategori cocok"
                message="Coba kata kunci atau filter jenis yang berbeda."
              />
            </div>
          )}
          <Simulator items={items} />
        </>
      ) : null}
    </div>
  );
}
