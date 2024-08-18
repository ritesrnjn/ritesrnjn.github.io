import Project from './Project';
import projects from '@/config/projects.json'
import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'My Projects',
  description: 'My Projects'
}

export default function ProjectsPage() {
  return (
    <div className='max-w-screen-lg mx-auto my-6'>
      <h2 className='my-8 text-4xl text-green-600 font-light text-center'>
        Projects
      </h2>

      {projects.map((p) => (
        <Project key={p.id} details={p} />
      ))}

    </div>
  )
}
