import '@/styles/globals.css';
import { Urbanist } from 'next/font/google';

const urbanist = Urbanist({ subsets: ['latin'], weights: [400, 600, 800] });

export const metadata = {
  title: 'Trilogy Before',
  description:
    'La trilogía "Before" es un logro cinematográfico que nos invita a reflexionar sobre el amor, la conexión humana y el paso del tiempo de una manera que pocas otras películas logran',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={urbanist.className}>{children}</body>
    </html>
  );
}
