import {Dialog, Transition, TransitionChild} from '@headlessui/react'
import {Fragment} from 'react'
import {XMarkIcon} from '@heroicons/react/24/solid'

interface DrawerProps {
  open: boolean
  setDrawerOpen: Function
  children: any
}


export default function LeftDrawer({open, setDrawerOpen, children}: DrawerProps) {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog
        unmount={false}
        onClose={() => setDrawerOpen(false)}
        className='fixed z-30 inset-0'
      >
        <div className='flex h-screen w-80'>
          <TransitionChild
            as={Fragment}
            enter='transition-opacity ease-in duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-40'
            leave='transition-opacity ease-out duration-300'
            leaveFrom='opacity-40'
            leaveTo='opacity-0'
          >
            <div className='z-40 fixed inset-0 bg-black' aria-hidden="true"/>
          </TransitionChild>

          <TransitionChild
            as={Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-full'
          >
            <div className='flex w-full z-50'>
              <div
                className='flex flex-col justify-between bg-white w-full max-w-sm overflow-hidden text-left align-middle shadow overflow-y-auto h-full'>
                {children}
              </div>
              <div className='m-2 '>
                <button
                  type='button'
                  aria-label='close the navigation drawer'
                  tabIndex={0} role='button'
                  onClick={() => setDrawerOpen(false)}
                >
                  <XMarkIcon className='h-8 w-8 text-gray-300' aria-hidden='true' />
                </button>
              </div>
            </div>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  )
}
