import { Roboto } from 'next/font/google';
import { Press_Start_2P } from 'next/font/google';
import { Providers } from './providers';
import '../styles/main.scss';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
});

const pressStart2P = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-press-start',
});

export const metadata = {
  title: 'Jamendo player',
  description: 'Audio player demo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${pressStart2P.variable}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
