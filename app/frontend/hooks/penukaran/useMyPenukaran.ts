"use client";

import { useEffect, useState } from "react";
import { ApiError } from "@/lib/api/client";
import { myPenukaran } from "@/lib/api/penukaran";
import type { MyPenukaranRow } from "@/types/api";

/** Own redemption history (newest first). */
export function useMyPenukaran() {
  const [rows, setRows] = useState<MyPenukaranRow[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    myPenukaran().then(
      (data) => {
        if (!cancelled) {
          setRows(data);
          setError(null);
        }
      },
      (err: unknown) => {
        if (!cancelled)
          setError(
            err instanceof ApiError
              ? err.message
              : "Gagal memuat riwayat penukaran.",
          );
      },
    );
    return () => {
      cancelled = true;
    };
  }, []);

  return { rows, error };
}
