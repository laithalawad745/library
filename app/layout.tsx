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
  title: "Telecop - Modern React UI Component Library",
  description: "Beautiful, accessible, and easy to use React components. 35+ buttons, 30+ themes, cards, and containers.",
  keywords: ["react", "components", "ui", "tailwind", "buttons", "cards", "themes"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Telecop - Modern React UI Component Library",
    description: "Beautiful, accessible, and easy to use React components",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}