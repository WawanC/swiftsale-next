import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SwiftSale",
  description: "E-Commerce app created with NextJS",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
