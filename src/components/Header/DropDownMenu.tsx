import {Popover, Transition} from '@headlessui/react'
import {ChevronUpIcon} from '@heroicons/react/20/solid'
import React, {Fragment} from 'react'
import {HeaderMenuItem} from '@/types/header'

export default function DropDownMenu({menuItem}: { menuItem: HeaderMenuItem }): React.JSX.Element {
  return (
    <Popover className='relative'>
      {({open}) => (
        <>
          <Popover.Button
            className={`
                ${open ? 'text-white' : 'text-white/90'}
                items-center rounded-md text-sm hover:text-gray-300 outline-none`}
          >
            <span>{menuItem.title}</span>
            <ChevronUpIcon
              className={`ml-0.5 h-4 w-4 transition duration-150 ease-in-out group-hover:text-gray-300/80 ${
                open ? 'rotate-180 transform text-gray-300' : 'text-gray-300/70'
              }`}
              aria-hidden='true'
            />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <Popover.Panel
              className='absolute left-1/2 z-10 mt-3 w-56 max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl'>
              <div className='overflow-hidden rounded-xl shadow ring-1 ring-black/5'>
                <div className='relative bg-white px-2 py-4'>
                  {menuItem.children?.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className='-m-3 flex mx-0.5 items-center rounded-full py-4 px-6 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none'
                    >
                      <p className='text-sm text-gray-900'>
                        {item.title}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}
