"use client";

import { useEffect, useState } from "react";
import { ApiError } from "@/lib/api/client";
import { adminPenukaran } from "@/lib/api/admin";
import type { MyPenukaranRow } from "@/types/api";

/** All redemptions in the tenant (admin view). */
export function useAdminPenukaran() {
  const [rows, setRows] = useState<MyPenukaranRow[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    adminPenukaran().then(
      (data) => {
        if (!cancelled) {
          setRows(data);
          setError(null);
        }
      },
      (err: unknown) => {
        if (!cancelled)
          setError(
            err instanceof ApiError ? err.message : "Gagal memuat penukaran.",
          );
      },
    );
    return () => {
      cancelled = true;
    };
  }, []);

  return { rows, error };
}
