"use client";

import { useEffect, useState } from "react";
import { ApiError } from "@/lib/api/client";
import { me } from "@/lib/api/auth";
import type { MeResponse } from "@/types/api";

/**
 * Authenticated profile for display names and server-verified role.
 * 401s redirect to /login inside the client; other failures surface
 * as error (never a silent blank page) with retry + refresh.
 */
export function useProfile() {
  const [profile, setProfile] = useState<MeResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let cancelled = false;
    me().then(
      (data) => {
        if (!cancelled) {
          setProfile(data);
          setError(null);
        }
      },
      (err: unknown) => {
        if (!cancelled)
          setError(
            err instanceof ApiError ? err.message : "Gagal memuat profil.",
          );
      },
    );
    return () => {
      cancelled = true;
    };
  }, [attempt]);

  return {
    profile,
    error,
    refresh: () => setAttempt((n) => n + 1),
  };
}
