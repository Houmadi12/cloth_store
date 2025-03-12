"use client";

import { usePathname } from "next/navigation";
import { GlobalStyle } from "@/styles/GlobalStyles";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children,}: {children: React.ReactNode;}) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/connexion" || pathname === "/inscription";

  return (
    <html lang="fr">
      <body>
        <GlobalStyle />
        {!isAuthPage && <Navbar />}
        <main>{children}</main>
        {!isAuthPage && <Footer />}
      </body>
    </html>
  );
}
