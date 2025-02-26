import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ConstellationBackground from "@/components/ConstellationBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Will Blades Portfolio",
  description: "Personal website for Will Blades",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${jetBrainsMono.variable} antialiased`}>
        <ConstellationBackground>
          <Header />
          {children}
        </ConstellationBackground>
      </body>
    </html>
  );
}
