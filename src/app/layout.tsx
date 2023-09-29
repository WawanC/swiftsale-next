import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import NavBar from "@/app/_components/NavBar";
import Providers from "@/app/providers";
import { getMeApiServer } from "@/api/server/auth";
import StoreInitializer from "@/app/store/StoreInitializer";
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
    console.log(e);
  }

  return (
    <html lang="en">
      <body className={font.className}>
        <StoreInitializer user={user} />
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
