"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminShell, { ADMIN_MENU } from "@/components/admin/AdminShell";
import { GateError } from "@/components/ui/GateState";
import { useSelectedBank } from "@/hooks/bank/useSelectedBank";
import { useProfile } from "@/hooks/auth/useProfile";
import { useAdminSetors } from "@/hooks/admin/useAdminSetors";
import { clearSession, homeForRole } from "@/lib/session";

/**
 * Shared shell for all admin pages: bank gate (select once),
 * server-verified role gate (customers bounce to their home),
 * pending-verification badge, sidebar, topbar, and logout.
 */
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { bank, requireBank } = useSelectedBank();
  const { profile, error: profileError, refresh: refreshProfile } = useProfile();
  const { rows: queue } = useAdminSetors();

  useEffect(() => {
    requireBank("/admin");
  }, [requireBank]);

  useEffect(() => {
    if (profile && profile.role !== "admin_bank") {
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
  if (!profile || profile.role !== "admin_bank") return null;

  const displayName =
    profile.adminBank?.namaPengelola?.split(" ")[0] ?? profile.username;

  const pendingCount = queue
    ? queue.filter(
        (row) =>
          row.status === "menunggu_konfirmasi" || row.status === "diverifikasi",
      ).length
    : null;

  return (
    <AdminShell
      bankName={bank.namaApp}
      displayName={displayName}
      menu={ADMIN_MENU}
      pendingCount={pendingCount}
      onLogout={onLogout}
    >
      {children}
    </AdminShell>
  );
}
