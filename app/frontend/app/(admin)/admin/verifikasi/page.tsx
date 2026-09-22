import VerifikasiQueue from "@/components/admin/VerifikasiQueue";

export const metadata = {
  title: "Verifikasi Timbangan — Eco Waste Management",
};

export default async function VerifikasiPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const { id } = await searchParams;
  return <VerifikasiQueue initialId={id} />;
}
