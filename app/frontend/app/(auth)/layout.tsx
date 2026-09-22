export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 w-full flex items-center justify-center px-6 py-5">
        {children}
      </main>
      <footer className="py-6 text-center text-xs text-ink/50 no-print">
        Eco Waste Management
      </footer>
    </div>
  );
}
