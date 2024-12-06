import {AddExperience} from '@/types/resume'

export default function AddExperienceSection({spare}: {spare: AddExperience}) {
  return (
    <div className='mb-4'>
      <h3 className='text-lg'>
        {spare.title}
      </h3>
      <p className='font-light text-gray-900'>
        {spare.desc}
      </p>

      {spare.repo && (
        <h3 className='text-gray-600 font-light ml-4'>
          Git: {spare.repo}
        </h3>
      )}

      {spare.stack && (
        <p className='text-gray-600 font-light ml-4'>
          {spare.stack.join(' – ')}
        </p>
      )}
    </div>
  )
}
