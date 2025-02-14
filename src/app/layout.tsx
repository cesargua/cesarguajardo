import type { Metadata } from "next";
import { Geo } from "next/font/google"; // ✅ Import "Geo" font
import "./globals.css";

const geo = Geo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-geo",
});

export const metadata: Metadata = {
  title: "Cesar Guajardo | Portfolio",
  description: "Full-Stack Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geo.variable}>
      <body className="font-geo">{children}</body>
    </html>
  );
}
