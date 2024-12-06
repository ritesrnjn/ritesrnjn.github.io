import {Experience} from '@/types/resume'
import Image from 'next/image'

export default function ExperienceSection({exp}: { exp: Experience }) {
  return (
    <div className='mb-6'>
      <div className='flex'>
        <div>
          <Image
            height={48}
            width={48}
            src={`/resume/${exp.logo}`}
            alt={exp.logo}
          />
        </div>

        <div className='ml-3'>
          <div className='text-lg text-fuchsia-950 leading-6 tracking-wide'>
            {exp.designation}
          </div>
          <div className='text-md'>
            <span className='text-green-600'> {exp.company}</span>
            <span className='text-gray-500 font-light ml-4'>{exp.duration}</span>
            <span className='text-gray-500 font-light ml-4'>{exp.location}</span>
          </div>


        </div>
      </div>
      <div className='ml-20'>
        {exp.projects?.map((project) => (
          <div className='mt-3' key={project.name}>
            <h3 className='text-xl font-light'>{project.name}</h3>
            <p className='font-light'>{project.description}</p>
            <div className='font-light text-gray-600 ml-4'>
              {project.techStack.join(' – ')}
            </div>
          </div>
        ))}
      </div>


    </div>
  )
}
