import {Project as ProjectType} from '@/types/resume'

export default function Project({project}: { project: ProjectType }) {
  return (
    <div className='mt-3'>
      <h3 className='text-lg font-light -ml-4'>{project.name}</h3>
      <ul className='text-gray-500 font-light list-disc'>
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
