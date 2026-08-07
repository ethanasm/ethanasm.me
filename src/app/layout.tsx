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

const siteDescription =
  "Full-stack software engineer specializing in AI platform engineering — agents, MCP, and LLM-powered planning tools at Workday.";

export const metadata: Metadata = {
  metadataBase: new URL("https://ethanasm.me"),
  title: "Ethan Smith — Software Engineer",
  description: siteDescription,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Ethan Smith — Software Engineer",
    description: siteDescription,
    url: "https://ethanasm.me",
    siteName: "Ethan Smith",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethan Smith — Software Engineer",
    description: siteDescription,
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
