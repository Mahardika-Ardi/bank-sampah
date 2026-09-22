"use client";

import { useEffect, useState } from "react";
import { ApiError } from "@/lib/api/client";
import { rekapBulanan, rekapMingguan, rekapTahunan } from "@/lib/api/admin";
import type { RekapBulanan, RekapFleksibel } from "@/types/api";

/** Monthly recap (tonnage, payments, points, per-type breakdown). */
export function useRekapBulanan(bulan: string | null) {
  const [data, setData] = useState<RekapBulanan | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!bulan) return;
    let cancelled = false;
    rekapBulanan(bulan).then(
      (result) => {
        if (!cancelled) {
          setData(result);
          setError(null);
        }
      },
      (err: unknown) => {
        if (!cancelled)
          setError(
            err instanceof ApiError ? err.message : "Gagal memuat rekapitulasi.",
          );
      },
    );
    return () => {
      cancelled = true;
    };
  }, [bulan]);

  return { data, error };
}

/** Weekly recap anchored at an ISO date. */
export function useRekapMingguan(tanggal: string | null) {
  const [data, setData] = useState<RekapFleksibel | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!tanggal) return;
    let cancelled = false;
    rekapMingguan(tanggal).then(
      (result) => {
        if (!cancelled) {
          setData(result);
          setError(null);
        }
      },
      (err: unknown) => {
        if (!cancelled)
          setError(
            err instanceof ApiError ? err.message : "Gagal memuat rekapitulasi.",
          );
      },
    );
    return () => {
      cancelled = true;
    };
  }, [tanggal]);

  return { data, error };
}

/** Annual recap for a year. */
export function useRekapTahunan(tahun: number | null) {
  const [data, setData] = useState<RekapFleksibel | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!tahun) return;
    let cancelled = false;
    rekapTahunan(tahun).then(
      (result) => {
        if (!cancelled) {
          setData(result);
          setError(null);
        }
      },
      (err: unknown) => {
        if (!cancelled)
          setError(
            err instanceof ApiError ? err.message : "Gagal memuat rekapitulasi.",
          );
      },
    );
    return () => {
      cancelled = true;
    };
  }, [tahun]);

  return { data, error };
}
