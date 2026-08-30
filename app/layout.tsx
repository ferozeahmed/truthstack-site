import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://truthstack.example.com"),
  title: {
    default: "Truthstack — Software Testing & QA Consultancy",
    template: "%s — Truthstack",
  },
  description:
    "Truthstack helps teams ship reliable software: testing, AI-model validation, CI/CD pipelines, and testing-as-a-service.",
  openGraph: {
    type: "website",
    siteName: "Truthstack",
    title: "Truthstack — Software Testing & QA Consultancy",
    description:
      "Truthstack helps teams ship reliable software: testing, AI-model validation, CI/CD pipelines, and testing-as-a-service.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}>
        <Nav />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
