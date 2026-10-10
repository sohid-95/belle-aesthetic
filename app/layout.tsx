import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Belle Aesthetic Clinic | Treatment & Skincare",
  description: "Jelajahi pilihan treatment kecantikan, skincare, dan homecare di Belle Aesthetic Clinic. Hubungi kami untuk informasi dan konsultasi.",
  applicationName: "Belle Aesthetic Clinic",
  openGraph: {
    title: "Belle Aesthetic Clinic",
    description: "Perawatan kulit di klinik dan homecare untuk rutinitas yang lebih terarah.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
