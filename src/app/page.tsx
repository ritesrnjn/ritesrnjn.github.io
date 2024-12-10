import Image from 'next/image'
import Social from '@/components/Social'
import details from '@/config/landing.json'
import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Ritesh\'s blog ',
  description: 'Personal Blog'
}

export default function Home() {
  const {name, about} = details
  return (
    <>
      <div className='overflow-hidden rounded-full'>
        <Image alt='ritesh_pic' width={190} height={190} src='/img/me.jpg' />
      </div>

      <div className='text-center px-6'>
        <h4 className='mt-6 mb-4 text-4xl text-gray-800'>
          {name}
        </h4>

        <h6 className='text-lg font-light text-gray-600'>
          {about}
        </h6>
      </div>


      <div className='my-4'>
        <Social links={details.social}/>
      </div>
    </>
  )
}
