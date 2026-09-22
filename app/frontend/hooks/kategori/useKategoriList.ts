"use client";

import { useEffect, useState } from "react";
import { ApiError } from "@/lib/api/client";
import { listKategori } from "@/lib/api/kategori";
import type { Kategori } from "@/types/api";

/** Waste category catalog for the current bank. */
export function useKategoriList() {
  const [items, setItems] = useState<Kategori[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let cancelled = false;
    listKategori().then(
      (data) => {
        if (!cancelled) {
          setItems(data);
          setError(null);
        }
      },
      (err: unknown) => {
        if (!cancelled)
          setError(
            err instanceof ApiError
              ? err.message
              : "Gagal memuat kategori sampah.",
          );
      },
    );
    return () => {
      cancelled = true;
    };
  }, [attempt]);

  return { items, error, retry: () => setAttempt((n) => n + 1) };
}
