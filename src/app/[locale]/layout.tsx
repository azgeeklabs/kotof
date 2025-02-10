
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "intl-tel-input/styles";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Locale, routing } from "../../../i18n/routing";
import ProjectLayout from "./ProjectLayout";



export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {

  const { locale } = await params

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();



  return (
    <html>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ProjectLayout >
            {children}
          </ProjectLayout>
        </NextIntlClientProvider>

      </body>
    </html>
  );
}