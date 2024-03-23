import {Disclosure} from '@headlessui/react'
import React from 'react'
import {HeaderProps} from '@/types/header'
import NextLink from 'next/link'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

export default function MobileMainNav({headerMenu}: HeaderProps) {
  const titleCls: string = 'items-center rounded-full py-2 px-2 ease-in-out text-gray-900'

  return (
    <div>
      <NextLink
        href='/'
        className='flex items-center space-x-3 py-2 px-4 rounded-0'>
      </NextLink>
      <ul className='flex flex-col items-baseline p-4'>
        {headerMenu.map(menuItem => (menuItem.children ? (
          <Disclosure key={menuItem.title}>
            {({open}) => (
              <>
                <Disclosure.Button className='py-2'>
                  <span className={`inline-flex ${titleCls}`}>
                    {menuItem.title}
                    <ChevronUpIcon
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5`}
                    />
                  </span>

                </Disclosure.Button>
                <Disclosure.Panel className='text-gray-500'>
                  {menuItem.children?.map((item) => (
                    <a key={item.href}
                       href={item.href}
                       className={`flex pl-6 items-center py-1 text-gray-900`}>
                      {item.title}
                    </a>
                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ) : (
          <li key={menuItem.href}>
            <a
              href={menuItem.href}
              className={`flex ${titleCls}`}>
              {menuItem.title}
            </a>
          </li>
        )))
        }
      </ul>
    </div>
  )
}
