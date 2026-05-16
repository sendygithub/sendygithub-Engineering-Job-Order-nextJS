import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavLink from "./components/NavLink";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EJO Dashboard",
  description: "Modern maintenance dashboard for machines, parts, and repair orders",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full min-h-screen overflow-hidden">
        <Theme>

          <NavLink />
          {children}

        </Theme>
      </body>
    </html>
  );
}
