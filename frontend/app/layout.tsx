import './globals.css';
import { Geist_Mono } from 'next/font/google';
import type { Metadata } from 'next';

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: 'Happy2Assist',
  description: 'AI solutions for entrepreneurs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${geistMono.variable} min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
