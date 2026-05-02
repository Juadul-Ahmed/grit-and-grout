import dns from "node:dns"
dns.setServers(['8.8.8.8', '8.8.4.4']);

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

const InterFont = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "SlabStudio | Premium Tiles",
  description: "Discover our curated collection of 12 premium porcelain and ceramic tiles.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${InterFont.classname} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="w-11/12 mx-auto">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
