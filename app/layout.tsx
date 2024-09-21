import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Infinode",
  description:
    "Infinode is a software development company based in the Maldives. We specialize in web development, mobile app development, and branding.",
  icons: "/assets/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg" />
        <link rel="icon" type="image/png" href="/assets/favicon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
