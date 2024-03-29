import {ExperienceType} from '@/types/resume'

export default function Experience({exp}: {exp: ExperienceType}) {
  return (
    <div className='mb-6'>
      <div className='inline'>
        <span className='text-lg'>
          {exp.duration}
        </span>
        <span className='ml-4 text-lg font-light'>
           {exp.designation} at {exp.company}
        </span>
      </div>
      <hr />

      {exp.projects?.map((project) => (
        <div className='mt-3' key={project.title}>
          <h3 className='text-xl font-light'>{project.title}</h3>
          <p className='font-light text-[15px]'>{project.description}</p>
          <div className='font-light text-gray-500 ml-4 text-[15px]'>
            {project.techStack.join(' – ')}
          </div>
        </div>
      ))}
    </div>
  )
}
