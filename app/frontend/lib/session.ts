import { SESSION_STORAGE_KEY } from "@/lib/constants/storage";
import type { Session } from "@/types/api";

export function writeSession(session: Session): void {
  window.localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session));
}

/**
 * Clears only the login session. The selected bank is device-level and
 * survives logout so the user picks a bank exactly once.
 */
export function clearSession(): void {
  window.localStorage.removeItem(SESSION_STORAGE_KEY);
}

export function homeForRole(role: Session["role"]): string {
  return role === "admin_bank" ? "/admin" : "/dashboard";
}
