import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ArAiSEntryLayer } from "./components/ArAiSEntryLayer";
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
  metadataBase: new URL("https://www.araisdlog.com"),
  title: "ArAIsDLOG — Deterministic AI Governance",
  description:
    "The deterministic control layer for operational AI governance: system scope, controls, evidence lineage, recurring confirmations and audit-ready state.",
  keywords: [
    "AI governance",
    "EU AI Act",
    "AI compliance",
    "evidence lineage",
    "audit readiness",
    "ArAIsDLOG",
  ],
  openGraph: {
    title: "ArAIsDLOG — AI governance that can prove its state",
    description:
      "Operational AI governance with deterministic state, evidence lineage and recurring control confirmation.",
    url: "https://www.araisdlog.com/",
    siteName: "ArAIsDLOG",
    type: "website",
    images: [{ url: "/araisdlog-euipo-logo-transparent.png", width: 512, height: 512, alt: "ArAIsDLOG" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ArAIsDLOG — AI governance that can prove its state",
    description: "Operational AI governance with deterministic state, evidence lineage and recurring control confirmation.",
    images: ["/araisdlog-euipo-logo-transparent.png"],
  },
  alternates: { canonical: "/" },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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
        <ArAiSEntryLayer />
      </body>
    </html>
  );
}
