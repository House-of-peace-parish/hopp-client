import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StoreProviderClient from "./StoreProviderClient";
import 'react-toastify/dist/ReactToastify.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "House Of Peace Parish",
  description: "We are a vibrant parish under The Redeemed Christian Church of God, dedicated to raising Kingdom Stars for global influence through the teaching and application of God’s Word",
  icons: {
    icon: '/hopp.png.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F5F5F5]`}
      >
        <StoreProviderClient>
          {children}
        </StoreProviderClient>
      </body>
    </html>
  );
}
