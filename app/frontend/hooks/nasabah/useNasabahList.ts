"use client";

import { useEffect, useState } from "react";
import { ApiError } from "@/lib/api/client";
import { listNasabah } from "@/lib/api/nasabah";
import type { NasabahRow } from "@/types/api";

/** All customers in the tenant. */
export function useNasabahList() {
  const [rows, setRows] = useState<NasabahRow[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let cancelled = false;
    listNasabah().then(
      (data) => {
        if (!cancelled) {
          setRows(data);
          setError(null);
        }
      },
      (err: unknown) => {
        if (!cancelled)
          setError(
            err instanceof ApiError ? err.message : "Gagal memuat data nasabah.",
          );
      },
    );
    return () => {
      cancelled = true;
    };
  }, [attempt]);

  return { rows, error, retry: () => setAttempt((n) => n + 1) };
}
