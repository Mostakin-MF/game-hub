import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { GameQueryProvider } from '../context/GameQueryContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GameHub',
  description: 'Video Game Discovery App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white min-h-screen`}>
        <GameQueryProvider>
          {children}
        </GameQueryProvider>
      </body>
    </html>
  );
}
