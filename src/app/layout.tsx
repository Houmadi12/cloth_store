"use client";

import { usePathname } from "next/navigation";
import { GlobalStyle } from "@/styles/GlobalStyles";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/app/providers";

export default function RootLayout({ children,}: {children: React.ReactNode;}) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/connexion" || pathname === "/inscription";

  return (
    <html lang="fr">
      <body>
        <GlobalStyle />
        {!isAuthPage && <Navbar />}
        <Providers>
        <main>{children}</main>
        </Providers>
        {!isAuthPage && <Footer />}
      </body>
    </html>
  );
}
