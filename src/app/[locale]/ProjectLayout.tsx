"use client"
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "intl-tel-input/styles";
import Header from "./_components/header/header";
import Footer from "./_components/footer/footer";
import { DirectionProvider } from './_contexts/DirectionContext';
import { Toaster } from "react-hot-toast";
import { UserProvider } from "./_contexts/userContext";
import { WalletContextProvider } from "./_contexts/walletContext";
import { usePathname } from "next/navigation";



export default function ProjectLayout({
  children
}: {
  children: React.ReactNode;
}) {


  const pathname = usePathname()
  console.log(pathname);


  return (
    <html>
      <body>
        <DirectionProvider>
          <UserProvider>
            <WalletContextProvider>
              {!pathname.includes('/auth') && <Header />}
            {children}
            {!pathname.includes('/auth') && <Footer />}
            </WalletContextProvider>
            
            <Toaster />
          </UserProvider>
        </DirectionProvider>

      </body>
    </html>
  );
}