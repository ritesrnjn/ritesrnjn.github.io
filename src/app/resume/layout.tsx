import React from 'react'
import type {Metadata} from 'next'
import pageMeta from '@/config/pageMeta.json'
export const metadata: Metadata = pageMeta.resume

export default function ResumeLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className='max-w-screen-xl mx-auto my-12'>
      {children}
      <>
        <hr className='mt-8'/>

        <div className='text-center'>
          <div className='font-light mt-6 text-gray-400'>
            last update: December 2024
            <br/>
            online version: https://ranjanritesh.com/resume
            <br/>
            <a href='/resume.pdf' className='print:hidden flex justify-center' target='_blank'>
              <svg className='fill-[#e24045]' xmlns='http://www.w3.org/2000/svg' width='24' height='24'
                   viewBox='0 0 24 24'>
                <path
                  d='M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M10.92,12.31C10.68,11.54 10.15,9.08 11.55,9.04C12.95,9 12.03,12.16 12.03,12.16C12.42,13.65 14.05,14.72 14.05,14.72C14.55,14.57 17.4,14.24 17,15.72C16.57,17.2 13.5,15.81 13.5,15.81C11.55,15.95 10.09,16.47 10.09,16.47C8.96,18.58 7.64,19.5 7.1,18.61C6.43,17.5 9.23,16.07 9.23,16.07C10.68,13.72 10.9,12.35 10.92,12.31M11.57,13.15C11.17,14.45 10.37,15.84 10.37,15.84C11.22,15.5 13.08,15.11 13.08,15.11C11.94,14.11 11.59,13.16 11.57,13.15M14.71,15.32C14.71,15.32 16.46,15.97 16.5,15.71C16.57,15.44 15.17,15.2 14.71,15.32M9.05,16.81C8.28,17.11 7.54,18.39 7.72,18.39C7.9,18.4 8.63,17.79 9.05,16.81M11.57,11.26C11.57,11.21 12,9.58 11.57,9.53C11.27,9.5 11.56,11.22 11.57,11.26Z'>
                </path>
              </svg>
              <span className='text-fuchsia-950'>
              PDF Version
            </span>
            </a>
          </div>
        </div>
      </>
    </div>
  )
}
