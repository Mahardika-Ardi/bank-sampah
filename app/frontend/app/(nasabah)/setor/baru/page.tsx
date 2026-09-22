import SetorForm from "@/components/setor/SetorForm";

export const metadata = {
  title: "Formulir Setor Sampah — Eco Waste Management",
};

export default async function SetorBaruPage({
  searchParams,
}: {
  searchParams: Promise<{ kategori?: string; items?: string }>;
}) {
  const { kategori, items } = await searchParams;
  return (
    <div className="w-full space-y-6 pb-8">
      <div className="space-y-1">
        <h1 className="font-display font-extrabold text-3xl text-ink tracking-tight">
          Formulir Setor Sampah Baru
        </h1>
        <p className="text-sm text-ink/60">
          Catat perkiraan jenis dan berat sampah daur ulang Anda sebelum
          diserahkan ke Bank Sampah.
        </p>
      </div>
      <SetorForm initialKategori={kategori} initialItems={items} />
    </div>
  );
}
