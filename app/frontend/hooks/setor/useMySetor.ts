"use client";

import { useEffect, useState } from "react";
import { ApiError } from "@/lib/api/client";
import { mySetor } from "@/lib/api/setor";
import type { MySetorRow } from "@/types/api";

/** Own deposits for a month ("YYYY-MM", defaults to all). */
export function useMySetor(bulan?: string) {
  const [rows, setRows] = useState<MySetorRow[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let cancelled = false;
    mySetor(bulan).then(
      (data) => {
        if (!cancelled) {
          setRows(data);
          setError(null);
        }
      },
      (err: unknown) => {
        if (!cancelled)
          setError(
            err instanceof ApiError ? err.message : "Gagal memuat riwayat setor.",
          );
      },
    );
    return () => {
      cancelled = true;
    };
  }, [bulan, attempt]);

  return { rows, error, retry: () => setAttempt((n) => n + 1) };
}
