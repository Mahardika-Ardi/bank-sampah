import { api } from "@/lib/api/client";
import {
  APP_KEY_STORAGE_KEY,
  BANK_STORAGE_KEY,
} from "@/lib/constants/storage";
import type { BankOption } from "@/types/api";

export function listBanks() {
  return api<BankOption[]>("/maker/banks");
}

function parseBank(raw: string | null): BankOption | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as BankOption;
    if (!parsed.appKey || !parsed.namaApp) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function readBank(): BankOption | null {
  if (typeof window === "undefined") return null;
  return parseBank(window.localStorage.getItem(BANK_STORAGE_KEY));
}

/**
 * The single writer of the selected bank. Every other module only reads.
 * Callers needing reactivity should use `useSelectedBank` instead.
 */
export function writeBank(bank: BankOption): void {
  window.localStorage.setItem(BANK_STORAGE_KEY, JSON.stringify(bank));
  window.localStorage.setItem(APP_KEY_STORAGE_KEY, bank.appKey);
}
