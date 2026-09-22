import SetorReceipt from "@/components/setor/SetorReceipt";

export const metadata = {
  title: "Bukti Setor Sampah — Eco Waste Management",
};

export default async function SetorDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <SetorReceipt id={id} />;
}
