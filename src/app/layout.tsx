import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";

export const metadata: Metadata = {
  title: "Astral Paints",
  description:
    "Explore vibrant colours and premium paints for your home and office with Astral Paints. Discover product categories, services, and inspiration through our blog.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
