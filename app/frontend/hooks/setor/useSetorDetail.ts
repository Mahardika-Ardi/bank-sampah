"use client";

import { useEffect, useState } from "react";
import { ApiError } from "@/lib/api/client";
import { setorDetail } from "@/lib/api/setor";
import type { SetorDetail } from "@/types/api";

/** Full deposit detail (verified weights + items) by deposit id. */
export function useSetorDetail(id: string | null) {
  const [data, setData] = useState<SetorDetail | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    if (!id) return;
    let cancelled = false;
    setorDetail(id).then(
      (result) => {
        if (!cancelled) {
          setData(result);
          setError(null);
        }
      },
      (err: unknown) => {
        if (!cancelled)
          setError(
            err instanceof ApiError ? err.message : "Gagal memuat rincian.",
          );
      },
    );
    return () => {
      cancelled = true;
    };
  }, [id, attempt]);

  return { data, error, retry: () => setAttempt((n) => n + 1) };
}
