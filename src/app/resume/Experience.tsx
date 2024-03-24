
export default function Experience({ exp }) {
  return (
    <div className="mb-8">
      <div className="inline">
        <span className="text-lg">
          {exp.duration}
        </span>
        <span className="ml-4 text-lg font-light">
           {exp.designation} at {exp.company}
        </span>
      </div>
      <hr/>

      {exp.projects?.map((project) => (
        <div className='mt-3' key={project.title}>
          <h3 className='text-xl font-light'>{project.title}</h3>
          <p className='font-light text-[15px]'>{project.description}</p>
          {project.list?.map((i) => (
              <div className='font-light ml-4' key={i}>
                {i}
              </div>
            ))}
          <div className='font-light text-gray-600 ml-4'>
            {project.techStack.join(' – ')}
          </div>
        </div>
      ))}
    </div>
  )
}
