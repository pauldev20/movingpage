import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moving Service - Migrating",
  description: "Moving Service - Migrating",
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
        {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && process.env.NEXT_PUBLIC_UMAMI_URL && (
            <Script
                async={true}
                defer={true}
                src={`${process.env.NEXT_PUBLIC_UMAMI_URL}/script.js`}
                data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            />
        )}
    </html>
  );
}
