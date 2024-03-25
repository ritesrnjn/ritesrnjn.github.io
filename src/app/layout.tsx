import type {Metadata} from 'next'
import {Roboto} from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { GoogleAnalytics } from '@next/third-parties/google'

const roboto = Roboto({
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
})

const GA4_ID = process.env.NODE_ENV === 'production'
  ? process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID_PROD
  : process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID_DEV

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
    <body className={roboto.className}>
      <div className='flex flex-col min-h-screen'>
        <Header />
        {children}
      </div>
    </body>
    <GoogleAnalytics gaId={GA4_ID||''} />
    </html>
  )
}
