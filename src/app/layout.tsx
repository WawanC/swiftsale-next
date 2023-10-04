import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import Providers from "@/app/providers";
import { getMeApiServer } from "@/api/server/auth";
import { User } from "@/types/user";

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
  let user: User | null = null;

  try {
    user = await getMeApiServer();
  } catch (e) {
    console.log("Unauthorized access");
  }

  const randomId = Math.random().toString();

  return (
    <html lang="en">
      <body className={font.className}>
        <h1>
          ID: {randomId} ,User: {JSON.stringify(user)}
        </h1>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
