import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://develu0825.github.io/k-festa"),
  title: {
    default: "K-Festa — Discover Korea's Local Festivals",
    template: "%s · K-Festa",
  },
  description:
    "A friendly English guide to Korea's best local festivals for foreign travelers. Find what's happening, when and where to go, and exactly how to get there.",
  keywords: [
    "Korea festivals",
    "Korean local festival",
    "things to do in Korea",
    "travel Korea",
    "Boryeong Mud Festival",
    "cherry blossom Korea",
  ],
  openGraph: {
    title: "K-Festa — Discover Korea's Local Festivals",
    description:
      "A friendly English guide to Korea's best local festivals for foreign travelers.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
