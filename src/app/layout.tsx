import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";

const lato = Lato({
  weight: ["100", "300", "400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

import NavMenu from "./components/NavMenu";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Thomas Mestdagh",
  description: "Personal website of Thomas Mestdagh.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lato.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
