"use client";

import { useEffect, useState } from "react";
import { ApiError } from "@/lib/api/client";
import { dashboardStats } from "@/lib/api/admin";
import type { AdminStats } from "@/types/api";

/** Unit-wide statistics for the admin dashboard. */
export function useDashboardStats() {
  const [data, setData] = useState<AdminStats | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let cancelled = false;
    dashboardStats().then(
      (result) => {
        if (!cancelled) {
          setData(result);
          setError(null);
        }
      },
      (err: unknown) => {
        if (!cancelled)
          setError(
            err instanceof ApiError ? err.message : "Gagal memuat statistik.",
          );
      },
    );
    return () => {
      cancelled = true;
    };
  }, [attempt]);

  return { data, error, retry: () => setAttempt((n) => n + 1) };
}
