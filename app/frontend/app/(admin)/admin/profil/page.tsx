"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";
import { Skeleton } from "@/components/ui/Skeleton";
import { useSelectedBank } from "@/hooks/bank/useSelectedBank";
import { useProfile } from "@/hooks/auth/useProfile";

export default function ProfilPage() {
  const { bank } = useSelectedBank();
  const { profile } = useProfile();
  const [copied, setCopied] = useState(false);

  async function copyKey() {
    if (!bank) return;
    try {
      await navigator.clipboard.writeText(bank.appKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  if (!bank || !profile) {
    return (
      <div className="space-y-3">
        <Skeleton className="h-32" />
        <Skeleton className="h-48" />
      </div>
    );
  }

  const admin = profile.adminBank;

  return (
    <div className="w-full space-y-6 pb-8">
      <div className="space-y-1">
        <p className="text-xs font-bold uppercase tracking-wider text-muted">
          Admin Bank • Profil Unit
        </p>
        <h1 className="font-display font-extrabold text-3xl text-ink tracking-tight">
          Profil Unit Bank
        </h1>
        <p className="text-sm text-ink/60">
          Informasi unit bank sampah dan kredensial tenant Anda.
        </p>
      </div>

      <section className="rounded-2xl bg-card p-6 shadow-sm">
        <h2 className="flex items-center gap-2 font-display font-bold text-lg text-ink mb-4">
          <Icon name="storefront" className="text-eco" />
          Informasi Unit &amp; Penanggung Jawab
        </h2>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div className="p-4 rounded-xl bg-sand/60">
            <dt className="text-xs text-ink/50 mb-0.5">Nama Unit Bank</dt>
            <dd className="font-bold text-ink">{admin?.namaUnit ?? "-"}</dd>
          </div>
          <div className="p-4 rounded-xl bg-sand/60">
            <dt className="text-xs text-ink/50 mb-0.5">Nama Aplikasi</dt>
            <dd className="font-bold text-ink">{bank.namaApp}</dd>
          </div>
          <div className="p-4 rounded-xl bg-sand/60">
            <dt className="text-xs text-ink/50 mb-0.5">
              Penanggung Jawab / Manajer Unit
            </dt>
            <dd className="font-bold text-ink">{admin?.namaPengelola ?? "-"}</dd>
          </div>
          <div className="p-4 rounded-xl bg-sand/60">
            <dt className="text-xs text-ink/50 mb-0.5">Telepon Layanan</dt>
            <dd className="font-bold text-ink tabular-nums">
              {admin?.telp ?? "-"}
            </dd>
          </div>
          <div className="p-4 rounded-xl bg-sand/60">
            <dt className="text-xs text-ink/50 mb-0.5">Username Akun</dt>
            <dd className="font-bold text-ink">{profile.username}</dd>
          </div>
          <div className="p-4 rounded-xl bg-sand/60">
            <dt className="text-xs text-ink/50 mb-0.5">Peran</dt>
            <dd className="font-bold text-ink">Admin Bank</dd>
          </div>
        </dl>
      </section>

      <section className="rounded-2xl bg-eco-deep text-white p-6 shadow-sm">
        <h2 className="flex items-center gap-2 font-display font-bold text-lg mb-1">
          <Icon name="key" size="sm" className="text-gold" />
          Kredensial Tenant
        </h2>
        <p className="text-sm text-white/70 mb-4">
          Header HTTP yang wajib disertakan setiap request API unit ini.
        </p>
        <div className="flex flex-wrap items-center gap-2.5 p-4 rounded-xl bg-white/10">
          <code className="flex-1 min-w-48 font-mono text-sm text-gold break-all">
            {bank.appKey}
          </code>
          <button
            type="button"
            onClick={() => void copyKey()}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gold hover:bg-peach text-ink text-sm font-bold transition-colors shrink-0"
          >
            <Icon name={copied ? "check" : "content_copy"} size="sm" />
            {copied ? "Tersalin!" : "Salin"}
          </button>
        </div>
      </section>
    </div>
  );
}
