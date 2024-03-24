'use client'
import React, {useState} from 'react'
import DropDownMenu from './DropDownMenu'
import LeftDrawer from '@/components/Drawers/LeftDrawer'
import MobileMainNav from './MobileMainNav'
import {Bars2Icon} from '@heroicons/react/20/solid'
import headerMenu from '@/config/mainMenu.json'


export default function Header(): React.JSX.Element {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const titleCls: string = 'items-center rounded-full py-1.5 px-3 ease-in-out text-gray-900 hover:bg-gray-100'

  return (
    <>
      <nav className='border-gray-200 print:hidden'>
        <div className='flex flex-wrap items-center mx-auto px-1 md:px-4 py-1 min-h-12'>
          <button
            data-collapse-toggle='navbar-default'
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-700 rounded-lg md:hidden focus:outline-none'
            aria-controls='navbar-default'
            onClick={() => setDrawerOpen(true)}
            aria-expanded='false'>
            <span className='sr-only'>Open main menu</span>
            <Bars2Icon />

          </button>
          <div className='grow' />
          <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
            <ul
              className='flex flex-col items-baseline p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0 md:border-0'>
              {headerMenu.map(menuItem => (menuItem.children ? (
                <DropDownMenu key={menuItem.title} menuItem={menuItem} />
              ) : (
                <li key={menuItem.href}>
                  <a
                    href={menuItem.href}
                    className={`block ${titleCls}`}>
                    {menuItem.title}
                  </a>
                </li>
              )))
              }
            </ul>
          </div>
        </div>
      </nav>
      <div className='block sm:hidden'>
        <LeftDrawer open={drawerOpen} setDrawerOpen={setDrawerOpen}>
          <MobileMainNav headerMenu={headerMenu} />
        </LeftDrawer>
      </div>
    </>
  )
}
