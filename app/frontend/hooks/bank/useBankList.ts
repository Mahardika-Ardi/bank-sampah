"use client";

import { useCallback, useEffect, useState } from "react";
import { ApiError } from "@/lib/api/client";
import { listBanks } from "@/lib/api/banks";
import type { BankOption } from "@/types/api";

const LOAD_ERROR = "Gagal memuat daftar bank.";

/**
 * Fetches the public bank list for /pilih-bank.
 * Renders name-only rows; the key is never displayed.
 */
export function useBankList() {
  const [banks, setBanks] = useState<BankOption[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    listBanks().then(
      (data) => {
        if (!cancelled) setBanks(data);
      },
      (err: unknown) => {
        if (!cancelled)
          setError(err instanceof ApiError ? err.message : LOAD_ERROR);
      },
    );
    return () => {
      cancelled = true;
    };
  }, []);

  const retry = useCallback(async () => {
    setError(null);
    setBanks(null);
    try {
      setBanks(await listBanks());
    } catch (err) {
      setError(err instanceof ApiError ? err.message : LOAD_ERROR);
    }
  }, []);

  return { banks, error, retry };
}
