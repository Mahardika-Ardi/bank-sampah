"use client";

import { useEffect, useState } from "react";
import { ApiError } from "@/lib/api/client";
import { adminSetors } from "@/lib/api/admin";
import type { AdminSetorRow } from "@/types/api";

export type AdminSetorFilter = {
  status?: string;
  bulan?: string;
};

/** All deposit submissions with optional server filters. */
export function useAdminSetors(filter: AdminSetorFilter = {}) {
  const [rows, setRows] = useState<AdminSetorRow[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);
  const status = filter.status;
  const bulan = filter.bulan;

  useEffect(() => {
    let cancelled = false;
    adminSetors({ status, bulan }).then(
      (data) => {
        if (!cancelled) {
          setRows(data);
          setError(null);
        }
      },
      (err: unknown) => {
        if (!cancelled)
          setError(
            err instanceof ApiError ? err.message : "Gagal memuat antrean.",
          );
      },
    );
    return () => {
      cancelled = true;
    };
  }, [status, bulan, attempt]);

  return { rows, error, retry: () => setAttempt((n) => n + 1) };
}
