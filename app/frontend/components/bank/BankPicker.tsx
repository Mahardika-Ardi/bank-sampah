"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";
import { FormError } from "@/components/form/fields";
import { useSelectedBank } from "@/hooks/bank/useSelectedBank";
import { useBankList } from "@/hooks/bank/useBankList";
import type { BankOption } from "@/types/api";

function safeNext(next: string | undefined): string {
  if (next && next.startsWith("/") && !next.startsWith("//")) return next;
  return "/login";
}

export default function BankPicker({ next }: { next?: string }) {
  const { banks, error, retry } = useBankList();
  const { selectBank } = useSelectedBank();
  const [selecting, setSelecting] = useState<string | null>(null);

  function choose(bank: BankOption) {
    setSelecting(bank.id);
    selectBank(bank, safeNext(next));
  }

  return (
    <div className="w-full max-w-2xl">
      <div className="bg-card rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-eco px-6 py-5">
          <p className="text-gold text-[11px] font-bold tracking-wider">
            ECO WASTE MANAGEMENT
          </p>
          <h1 className="font-display font-bold text-xl text-white mt-1">
            Pilih Bank Sampah
          </h1>
          <p className="text-sm text-white/70 mt-0.5">
            Pilih unit bank yang ingin Anda ikuti sebagai nasabah.
          </p>
        </div>
        <div className="p-6">
          {banks === null && !error ? (
            <div className="space-y-3" aria-label="Memuat daftar bank">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="h-16 rounded-xl bg-sand animate-pulse"
                />
              ))}
            </div>
          ) : null}
          <FormError message={error} />
          {error ? (
            <button
              type="button"
              onClick={() => void retry()}
              className="mt-3 w-full py-3 px-6 rounded-full bg-eco hover:bg-eco-deep text-white font-bold text-sm transition-colors"
            >
              Coba Lagi
            </button>
          ) : null}
          {banks !== null && banks.length === 0 ? (
            <p className="text-sm text-ink/70 text-center py-6">
              Belum ada bank sampah yang terdaftar. Hubungi pengelola untuk
              informasi lebih lanjut.
            </p>
          ) : null}
          {banks !== null && banks.length > 0 ? (
            <ul className="space-y-3">
              {banks.map((bank) => (
                <li key={bank.id}>
                  <button
                    type="button"
                    disabled={selecting !== null}
                    onClick={() => choose(bank)}
                    className="w-full flex items-center gap-3 p-4 rounded-xl bg-sand hover:bg-peach/60 transition-colors text-left disabled:opacity-60"
                  >
                    <span className="w-10 h-10 rounded-full bg-eco/10 text-eco flex items-center justify-center shrink-0">
                      <Icon name="storefront" />
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block font-display font-bold text-ink truncate">
                        {bank.namaApp}
                      </span>
                      <span className="block text-xs text-ink/60">
                        Ketuk untuk memilih unit ini
                      </span>
                    </span>
                    <Icon
                      name="east"
                      className="text-eco shrink-0"
                    />
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
}
