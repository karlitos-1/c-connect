import Footer from "@/components/Footer";
import Header from "@/components/Header";
import VoiceAssistant from "@/components/VoiceAssistant";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "C-CONNECT - Solutions Techniques, Réseaux et Sécurité | Pointe-Noire, République du Congo",
  description:
    "C-CONNECT, expert en solutions techniques à Pointe-Noire, Congo. Administration réseau, installation serveur, surveillance IP, GPS, MikroTik. Support 24/7. Devis gratuit +242 06 940 13 92",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <VoiceAssistant />
      </body>
    </html>
  );
}
