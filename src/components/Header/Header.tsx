'use client'
import {useState} from 'react'
import DropDownMenu from './DropDownMenu'
import LeftDrawer from '@/components/Drawers/LeftDrawer'
import MobileMainNav from './MobileMainNav'
import {Bars2Icon} from '@heroicons/react/20/solid'
import headerMenu from '@/config/mainMenu.json'
import {usePathname} from 'next/navigation'
import {HeaderMenuItem} from '@/types/header'


export default function Header() {
  const pathname = usePathname()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const titleCls: string = 'items-center rounded-full py-1.5 px-3 ease-in-out hover:bg-gray-50 uppercase tracking-widest'

  return (
    <>
      <nav className='border-gray-200 border border-t-4 border-t-green-500 print:hidden '>
        <div className='flex flex-wrap items-center mx-auto px-1 md:px-4 py-1 min-h-12'>
          <button
            data-collapse-toggle='navbar-default'
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-700 rounded-lg md:hidden focus:outline-none'
            aria-controls='navbar-default'
            onClick={() => setDrawerOpen(true)}
            aria-expanded='false'>
            <span className='sr-only'>Open main menu</span>
            <Bars2Icon className='h-20 w-20 text-gray-800'/>

          </button>
          <div className='grow' />
          <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
            <ul
              className='flex flex-col items-baseline p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-4 md:mt-0 md:border-0'>
              {headerMenu.map((menuItem:HeaderMenuItem) => (
                menuItem.children ? (
                  <DropDownMenu key={menuItem.title} menuItem={menuItem} />
                ) : (
                  <li key={menuItem.href}>
                    <a
                      href={menuItem.href}
                      className={`block ${titleCls} ${pathname === menuItem.href ? 'text-green-600' : 'text-gray-600'}`}>
                      {menuItem.title}
                    </a>
                  </li>
                )
              ))}
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
