import type { Metadata } from "next";
import { Syne, DM_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Kennyy — Full-stack · SparkDB · Kord-Ai · @M3264",
  description:
    "Kennyy (M3264) — full-stack engineer. Active collaborator on SparkDB with haki.dev. Author of Kord-Ai and CryptoVault. Builds platforms, APIs, UIs, bots — whatever the product needs.",
  openGraph: {
    title: "Kennyy — Full-stack · SparkDB · Kord-Ai",
    description:
      "Platforms, products, and open source. SparkDB collaborator · Kord-Ai · CryptoVault. github.com/M3264",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${plexMono.variable} h-full dark`}
    >
      <body className="min-h-full flex flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
