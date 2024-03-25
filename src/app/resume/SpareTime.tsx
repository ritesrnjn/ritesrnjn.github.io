export default function SpareTime({spare}) {
  return (
    <div className='mb-8'>
      <h3 className='text-lg'>
        {spare.title}
      </h3>
      <p className='text-lg font-light'>
        {spare.desc}
      </p>

      {spare.repo && (
        <h3 className='text-gray-500 font-light ml-4'>
          Git: {spare.repo}
        </h3>
      )}

      {spare.stack && (
        <p className='text-gray-500 font-light ml-4'>
          {spare.stack.join(' – ')}
        </p>
      )}
    </div>
  )
}
