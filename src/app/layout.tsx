import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Wildwood Standing Desk | EffyDesk',
  description:
    'Experience the Wildwood Solid Wood Electric Standing Desk. Handcrafted from sustainably sourced wood with dual motors, whisper-quiet operation, and 10-year warranty.',
  keywords: [
    'standing desk',
    'electric desk',
    'solid wood desk',
    'ergonomic desk',
    'EffyDesk',
    'Wildwood',
  ],
  authors: [{ name: 'EffyDesk' }],
  openGraph: {
    title: 'Wildwood Standing Desk | EffyDesk',
    description:
      'Experience the Wildwood Solid Wood Electric Standing Desk. Handcrafted, sustainable, powerful.',
    type: 'website',
    locale: 'en_CA',
    siteName: 'EffyDesk',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
