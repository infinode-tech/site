import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Infinode — Infinite Possibilities",
  description:
    "Infinode is a software studio building web platforms, mobile apps, and brand systems for ambitious teams.",
  icons: "/assets/favicon.ico",
  openGraph: {
    title: "Infinode — Infinite Possibilities",
    description:
      "A software studio building web platforms, mobile apps, and brand systems for ambitious teams.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head>
        <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg" />
        <link rel="icon" type="image/png" href="/assets/favicon.png" />
      </head>
      <body className="font-sans antialiased bg-ink-1 text-mist-1 selection:bg-mist-1/20 selection:text-mist-1">
        {children}
      </body>
    </html>
  );
}
