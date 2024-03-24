import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';

const roboto = Roboto({
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Ritesh Ranjan",
  description: "Personal Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={roboto.className}>
      <div className='flex flex-col min-h-screen'>
        <Header />
        {children}
      </div>
    </body>
    </html>
);
}
