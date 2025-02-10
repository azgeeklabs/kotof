// "use client"
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "intl-tel-input/styles";
import Header from "./_components/header/header";
import Footer from "./_components/footer/footer";
import { DirectionProvider } from "./_contexts/DirectionContext";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "./_contexts/userContext";
import { WalletContextProvider } from "./_contexts/walletContext";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
// import { headers } from 'next/headers';
import { Locale, routing, usePathname } from "../../i18n/routing";
import LayoutWrapper from "./LayoutWrapper";
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages({ locale });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const pathname = usePathname();
  // console.log(pathname);

  return (
    <html lang={locale}>
      <head />
      <body>
        <NextIntlClientProvider messages={messages}>
          <DirectionProvider>
            <UserProvider>
              <WalletContextProvider>
                <LayoutWrapper>{children}</LayoutWrapper>
              </WalletContextProvider>

              <Toaster />
            </UserProvider>
          </DirectionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
