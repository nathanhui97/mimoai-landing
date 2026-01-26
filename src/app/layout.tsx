import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mimoai - Turn Browser Tasks into Reusable Micro-Apps",
  description:
    "Record yourself doing a task once, and Mimoai creates an intelligent automation that adapts to changes. No coding required.",
  keywords: [
    "browser automation",
    "no-code automation",
    "AI automation",
    "Chrome extension",
    "workflow automation",
    "micro-apps",
  ],
  openGraph: {
    title: "Mimoai - Turn Browser Tasks into Reusable Micro-Apps",
    description:
      "Record yourself doing a task once, and Mimoai creates an intelligent automation that adapts to changes. No coding required.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mimoai - Turn Browser Tasks into Reusable Micro-Apps",
    description:
      "Record yourself doing a task once, and Mimoai creates an intelligent automation that adapts to changes. No coding required.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
