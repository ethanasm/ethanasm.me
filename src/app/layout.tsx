import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Ethan Smith — Software Engineer",
  description:
    "Software engineer specializing in AI platform engineering and full-stack development at Workday.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Ethan Smith",
    description:
      "Full-Stack Software Engineer · AI Platform Engineering",
    url: "https://ethanasm.me",
    siteName: "Ethan Smith",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
