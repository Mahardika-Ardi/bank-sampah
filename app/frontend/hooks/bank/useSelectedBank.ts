"use client";

import { useCallback, useSyncExternalStore } from "react";
import { useRouter } from "next/navigation";
import { BANK_STORAGE_KEY } from "@/lib/constants/storage";
import { readBank, writeBank } from "@/lib/api/banks";
import type { BankOption } from "@/types/api";

const listeners = new Set<() => void>();

function subscribe(callback: () => void): () => void {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

let cachedRaw: string | null | undefined;
let cachedBank: BankOption | null = null;

function getSnapshot(): BankOption | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(BANK_STORAGE_KEY);
  if (raw !== cachedRaw) {
    cachedRaw = raw;
    cachedBank = readBank();
  }
  return cachedBank;
}

function emitChange(): void {
  for (const listener of listeners) listener();
}

/**
 * Single owner of the selected bank. The bank is picked exactly once in
 * /pilih-bank; every other page only reads. Redirects are confirmed
 * against storage (not the possibly-stale first render) so a stored
 * bank never triggers a wrongful bounce.
 */
export function useSelectedBank() {
  const router = useRouter();
  const bank = useSyncExternalStore(subscribe, getSnapshot, () => null);

  const requireBank = useCallback(
    (next: string) => {
      if (readBank() === null) {
        router.replace(`/pilih-bank?next=${encodeURIComponent(next)}`);
      }
    },
    [router],
  );

  const selectBank = useCallback(
    (option: BankOption, next: string) => {
      writeBank(option);
      emitChange();
      router.replace(next);
    },
    [router],
  );

  return { bank, requireBank, selectBank };
}
