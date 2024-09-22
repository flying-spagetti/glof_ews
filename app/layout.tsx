//layout.tsx
"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from 'react';
import Loading from './components/Loading'; // Adjust the path as necessary

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "GLOF EWS",
  description: "Glacier lake floods early detection system",
  icons: {
    icon: "./favicon.ico",
    shortcut: "./favicon.ico",
    apple: "./apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay for demonstration purposes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Change this to your actual loading condition

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        {loading ? <Loading /> : children}
      </body>
    </html>
  );
}