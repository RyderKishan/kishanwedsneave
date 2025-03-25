import type { Metadata } from 'next';
import { Pinyon_Script, Roboto, Open_Sans } from 'next/font/google';
import './globals.css';
import './normalize.min.css';

const pinyonScript = Pinyon_Script({
  variable: '--font-pinyon-script',
  subsets: ['latin'],
  weight: '400',
});

const roboto = Roboto({
  variable: '--font-roboto',
  weight: '100',
});

const openSans = Open_Sans({
  variable: '--font-open-sans',
  weight: '300',
});

export const metadata: Metadata = {
  title: 'Kishan Weds Neave',
  description: 'We are getting married on 8th June 2025 ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pinyonScript.variable} ${roboto.variable} ${openSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
