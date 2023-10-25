import { useLocale, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

import '@/styles/globals.css';
import { Urbanist } from 'next/font/google';

const urbanist = Urbanist({ subsets: ['latin'], weights: [400, 600, 800] });

export const metadata = {
  title: 'Trilogy Before',
  description:
    'La trilogía "Before" es un logro cinematográfico que nos invita a reflexionar sobre el amor, la conexión humana y el paso del tiempo de una manera que pocas otras películas logran',
};

export default async function RootLayout({ children, params: { locale } }) {
  // const locale = useLocale();
  // console.log(locale);

  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  // if (params.locale !== locale) notFound();

  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={urbanist.className} suppressHydrationWarning={true}>
          {children}
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
