"use client";

import type { Metadata } from "next";
import { GlobalStyle } from "../styles/GlobalStyles";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <GlobalStyle />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
