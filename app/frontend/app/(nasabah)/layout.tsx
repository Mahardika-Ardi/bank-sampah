"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import CustomerShell, { NASABAH_MENU } from "@/components/dashboard/CustomerShell";
import { GateError } from "@/components/ui/GateState";
import { useSelectedBank } from "@/hooks/bank/useSelectedBank";
import { useProfile } from "@/hooks/auth/useProfile";
import { clearSession, homeForRole } from "@/lib/session";

/**
 * Shared shell for all customer pages: bank gate (select once),
 * server-verified role gate (admins bounce to their home), sidebar,
 * topbar, and logout.
 */
export default function NasabahLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { bank, requireBank } = useSelectedBank();
  const { profile, error: profileError, refresh: refreshProfile } = useProfile();

  useEffect(() => {
    requireBank("/dashboard");
  }, [requireBank]);

  useEffect(() => {
    if (profile && profile.role !== "nasabah") {
      router.replace(homeForRole(profile.role));
    }
  }, [profile, router]);

  function onLogout() {
    clearSession();
    router.replace("/login");
  }

  if (!bank) return null;
  if (profileError)
    return <GateError message={profileError} onRetry={refreshProfile} />;
  if (!profile || profile.role !== "nasabah") return null;

  const displayName =
    profile.nasabah?.namaNasabah?.split(" ")[0] ?? profile.username;

  return (
    <CustomerShell
      bankName={bank.namaApp}
      displayName={displayName}
      avatarFoto={profile.nasabah?.foto ?? null}
      menu={NASABAH_MENU}
      onLogout={onLogout}
    >
      {children}
    </CustomerShell>
  );
}
