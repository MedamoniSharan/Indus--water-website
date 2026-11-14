import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "INDUS - Packaged Drinking Water | Pure & Refreshing 24/7",
  description:
    "Experience the purity of INDUS Packaged Drinking Water. Turakapalem, Guntur. Available 24/7. Call: 9060234566.",
  keywords: ["INDUS", "packaged drinking water", "indus water", "pure water", "Guntur water", "Turakapalem"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden w-full">{children}</body>
    </html>
  );
}
