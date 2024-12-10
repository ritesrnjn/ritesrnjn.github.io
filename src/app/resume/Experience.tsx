import {Experience as ExperienceType, Project as ProjectType} from '@/types/resume'
import Image from 'next/image'

function Project({project}: { project: ProjectType }) {
  return (
    <div className='mt-3'>
      <h3 className='text-lg text-fuchsia-950 font-light -ml-4'>{project.name}</h3>
      <ul className='text-gray-800 font-light list-disc'>
        <li>
          {project.description.map((desc, i) => (
            <span key={`${project.name}-${i}`}>{desc}&nbsp;</span>
          ))}
        </li>
        <li>{project.techStack.join(', ')}</li>
      </ul>
    </div>
  )
}

export function Experience({exp}: { exp: ExperienceType }) {
  return (
    <div className='mb-6'>
      <div className='flex'>
        <div>
          <Image height={48} width={48} src={`/resume/${exp.logo}`} alt={exp.logo}/>
        </div>

        <div className='ml-3'>
          <div className='text-xl text-fuchsia-950 leading-6'>
            {exp.designation}
          </div>
          <div className='text-md'>
            <span className='text-fuchsia-950'> {exp.company}</span>
            <span className='text-gray-500 font-light ml-4'>{exp.duration}</span>
            <span className='text-gray-500 font-light ml-4'>{exp.location}</span>
          </div>
        </div>
      </div>
      <div className='ml-20'>
        {exp.projects?.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </div>
    </div>
  )
}

export function AddExperience({project}: { project: ProjectType }) {
  return (
    <div className='mt-3'>
      <h3 className='text-lg text-fuchsia-950 font-light'>{project.name}</h3>
      <ul className='text-gray-800 font-light list-disc ml-4'>
        {project.description.map((desc, i) => (
          <li key={`${project.name}-${i}`}>{desc}&nbsp;</li>
        ))}
        <li>{project.repo}</li>
        <li>{project.techStack.join(', ')}</li>
      </ul>
    </div>
  )
}
