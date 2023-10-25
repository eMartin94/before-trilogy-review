import { useLocale, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

import '@/styles/globals.css';
import { Urbanist } from 'next/font/google';

const urbanist = Urbanist({ subsets: ['latin'], weights: [400, 600, 800] });

export const metadata = {
  // metadataBase: 'http://localhost:3000',
  metadataBase: new URL('https://before-trilogy-review.vercel.app'),
  title: 'Trilogy Before',
  description:
    'La trilogía "Before" es un logro cinematográfico que nos invita a reflexionar sobre el amor, la conexión humana y el paso del tiempo de una manera que pocas otras películas logran',
  keywords:
    'trilogía, before, película, cinematográfica, logro, reflexión, amor, conexión, humana, paso, tiempo',
  openGraph: {
    type: 'website',
    url: 'https://yourwebsite.com',
    title: 'Trilogy Before',
    description:
      'The "Before" trilogy is a cinematic achievement that invites us to reflect on love, human connection, and the passage of time in a way that few other films achieve.',
    image:
      'https://res.cloudinary.com/dxbbbewxt/image/upload/v1698267740/before-trilogy/poster_un9yfu.webp',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@eMartiiin94',
    creator: '@eMartiiin94',
    title: 'Trilogy Before',
    description:
      'The "Before" trilogy is a cinematic achievement that invites us to reflect on love, human connection, and the passage of time in a way that few other films achieve.',
    image:
      'https://res.cloudinary.com/dxbbbewxt/image/upload/v1698267740/before-trilogy/poster_un9yfu.webp',
  },
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
