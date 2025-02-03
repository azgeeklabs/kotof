"use client"
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "intl-tel-input/styles";
import Header from "@/app/_components/header/header";
import Footer from "@/app/_components/footer/footer";
import { usePathname } from 'next/navigation'
import { DirectionProvider } from '@/app/_contexts/DirectionContext';
import { Toaster } from "react-hot-toast";
import { UserProvider } from "./_contexts/userContext";
import { WalletContextProvider } from "./_contexts/walletContext";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const pathname = usePathname()
  console.log(pathname);


  return (
    <html>
      <body>
        <DirectionProvider>
          <UserProvider>
            <WalletContextProvider>
              {!pathname.startsWith('/auth') && <Header />}
            {children}
            {!pathname.startsWith('/auth') && <Footer />}
            </WalletContextProvider>
            
            <Toaster />
          </UserProvider>
        </DirectionProvider>
      </body>
    </html>
  );
}
