import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import Providers from "@/app/providers";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SwiftSale",
  description: "E-Commerce app created with NextJS",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
