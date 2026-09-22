"use client";

import { useEffect, useState } from "react";
import { ApiError } from "@/lib/api/client";
import { listHadiah } from "@/lib/api/hadiah";
import type { Hadiah } from "@/types/api";

/** Reward catalog for the current bank. */
export function useHadiahList() {
  const [items, setItems] = useState<Hadiah[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let cancelled = false;
    listHadiah().then(
      (data) => {
        if (!cancelled) {
          setItems(data);
          setError(null);
        }
      },
      (err: unknown) => {
        if (!cancelled)
          setError(
            err instanceof ApiError ? err.message : "Gagal memuat katalog hadiah.",
          );
      },
    );
    return () => {
      cancelled = true;
    };
  }, [attempt]);

  return { items, error, retry: () => setAttempt((n) => n + 1) };
}
