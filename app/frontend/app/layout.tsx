import type { Metadata } from "next";
import "./globals.css";
import "material-symbols/outlined.css";
import { dmSans } from "@/lib/font/dm-sans";
import { openSans } from "@/lib/font/open-sans";

export const metadata: Metadata = {
  title: "Eco Waste Management — Bank Sampah Digital",
  description:
    "Platform Bank Sampah Digital: setor sampah daur ulang, kumpulkan poin, tukarkan hadiah.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${dmSans.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
