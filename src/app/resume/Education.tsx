export default function Education({edu}) {
  return (
    <div>
      <div className='inline'>
        <span className='text-lg'>
          {edu.begin} to {edu.end}
        </span>
        <span className='ml-4 text-xl font-light'>
          {edu.degree} in {edu.stream}
        </span>
      </div>

      <div className='text-lg font-light'>
        {edu.school},
      </div>
      <div className='text-lg font-light'>
        {edu.university}, {edu.location}
      </div>
    </div>
  )
}
