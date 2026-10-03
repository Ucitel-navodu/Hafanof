import type { Metadata } from "next";
import { EB_Garamond, Open_Sans } from "next/font/google";
import "./globals.css";

const heading = EB_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700"],
  variable: "--font-heading"
});

const body = Open_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "Hafanof z.s. | Láska, co vrtí ocasem",
  description:
    "Hafanof z.s. pomáhá psům v nouzi, poskytuje jim péči a hledá nové domovy."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={`${heading.variable} ${body.variable}`}>
        {children}
      </body>
    </html>
  );
}
