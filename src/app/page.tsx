import Image from 'next/image'
import Social from '@/components/Social'
import resume from '@/config/resume.json'

export default function Home() {
  const {name, about} = resume.contact
  return (
    <div className='flex flex-col items-center justify-center grow'>
      <div className='relative w-auto h-auto overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600'>
        <Image alt='ritesh_pic' width={190} height={190} src='/img/me.jpg' />
      </div>

      <h4 className='font-light mt-6 mb-4 text-4xl text-gray-700'>
        {name}
      </h4>

      <h6 className='text-base text-gray-600'>
        {about}
      </h6>

      <div className='my-4'>
        <Social />
      </div>

    </div>
  )
}
