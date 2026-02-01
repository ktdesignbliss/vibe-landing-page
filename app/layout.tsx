import type { Metadata } from "next";
import {
  Archivo_Black,
  Inter_Tight,
  Inter,
} from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AXON Core — High-Performance Neural Computing",
  description: "Premium fitness & luxury performance tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${archivoBlack.variable} ${interTight.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
