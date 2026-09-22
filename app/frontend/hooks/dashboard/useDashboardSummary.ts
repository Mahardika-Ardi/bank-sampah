"use client";

import { useEffect, useState } from "react";
import { ApiError } from "@/lib/api/client";
import { dashboardSummary } from "@/lib/api/reports";
import type { DashboardSummary } from "@/types/api";

/**
 * Customer dashboard summary for a given month ("YYYY-MM").
 * Keeps previous data visible while refetching (no sync resets in effect).
 */
export function useDashboardSummary(bulan: string) {
  const [data, setData] = useState<DashboardSummary | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let cancelled = false;
    dashboardSummary({ periode: "bulanan", bulan }).then(
      (result) => {
        if (!cancelled) {
          setData(result);
          setError(null);
        }
      },
      (err: unknown) => {
        if (!cancelled)
          setError(
            err instanceof ApiError ? err.message : "Gagal memuat dashboard.",
          );
      },
    );
    return () => {
      cancelled = true;
    };
  }, [bulan, attempt]);

  return { data, error, loading: data === null && error === null, retry: () => setAttempt((n) => n + 1) };
}
