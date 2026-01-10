import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Wildwood Standing Desk | EffyDesk',
  description:
    'Experience the Wildwood Solid Wood Electric Standing Desk. Handcrafted from sustainably sourced wood with dual motors, whisper-quiet operation, and 10-year warranty. Canada\'s #1 standing desk.',
  keywords: [
    'standing desk',
    'electric desk',
    'solid wood desk',
    'ergonomic desk',
    'EffyDesk',
    'Wildwood',
    'Canadian furniture',
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
  twitter: {
    card: 'summary_large_image',
    title: 'Wildwood Standing Desk | EffyDesk',
    description:
      'Experience the Wildwood Solid Wood Electric Standing Desk. Canada\'s #1 standing desk.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
