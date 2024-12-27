"use client"
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/app/_components/header/header";
import Footer from "@/app/_components/footer/footer";
import { usePathname } from 'next/navigation'




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  const pathname = usePathname()
  console.log(pathname);
  

  return (
    <html lang="en">
      <body>
        {!pathname.startsWith('/auth') && <Header/>}
        {children}
        {!pathname.startsWith('/auth') && <Footer/>}
      </body>
    </html>
  );
}
