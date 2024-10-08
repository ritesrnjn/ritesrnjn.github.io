import {Roboto} from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { GoogleAnalytics } from '@next/third-parties/google'
import React from 'react'

const roboto = Roboto({
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
})

const GA4_ID = process.env.NODE_ENV === 'production'
  ? process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID_PROD
  : process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID_DEV

export const metadata = {
  icons: {
    icon: '/fav.ico',
  },
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
    <head>
      <link rel='icon' href='/favicon.ico' sizes='any' />
      <title> Ritesh&apos;s Blog </title>
    </head>
    <body className={roboto.className}>
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex flex-col items-center justify-center grow mx-4'>
        {children}
      </div>
    </div>
    </body>
    <GoogleAnalytics gaId={GA4_ID || ''} />
    </html>
  )
}
