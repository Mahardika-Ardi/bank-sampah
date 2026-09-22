import BankPicker from "@/components/bank/BankPicker";

export const metadata = {
  title: "Pilih Bank Sampah — Eco Waste Management",
};

export default async function PilihBankPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const { next } = await searchParams;
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 w-full flex items-center justify-center px-6 py-10">
        <BankPicker next={next} />
      </main>
      <footer className="py-6 text-center text-xs text-ink/50 no-print">
        Eco Waste Management — UKK RPL 2026/2027
      </footer>
    </div>
  );
}
