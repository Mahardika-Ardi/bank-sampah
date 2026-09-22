import LoginMosaic from "@/components/auth/LoginMosaic";

export const metadata = {
  title: "Masuk — Eco Waste Management",
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ registered?: string }>;
}) {
  const { registered } = await searchParams;
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 w-full flex items-center justify-center px-6 py-10">
        <LoginMosaic registered={registered === "1"} />
      </main>
      <footer className="py-6 text-center text-xs text-ink/50 no-print">
        Eco Waste Management — UKK RPL 2026/2027
      </footer>
    </div>
  );
}
