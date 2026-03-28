import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Urji Photography | Capturing Moments That Matter",
  description:
    "Professional wedding & event photography by Urji Photography. Capturing moments that matter with elegance and artistry.",
  keywords: [
    "photography",
    "wedding photography",
    "event photography",
    "portrait photography",
    "Urji Photography",
  ],
  openGraph: {
    title: "Urji Photography",
    description: "Capturing Moments That Matter",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
