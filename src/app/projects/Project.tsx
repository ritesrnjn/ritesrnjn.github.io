import {ProjectType} from '@/types/project'
export default function Project({details}: { details: ProjectType }) {

  return (
    <div>
      <div className='my-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-12'>
          <div className='col-span-1 sm:col-span-1'>
            <img className='rounded w-full border border-gray-100'
                 src={`/img/projects/${details.img}`}
                 alt={details.id}
            />
          </div>
          <div className='col-span-1 sm:col-span-1'>
            <div className='font-light text-3xl text-green-600 mb-2'>
              {details.name}
            </div>
            <div className='text-lg font-light'>
              {details.description}
            </div>

            {details.homepageUrl && (
              <div>
                <a href={details.homepageUrl}> view homepage </a>
              </div>
            )}

            {details.repoUrl && (
              <div>
                <a href={details.repoUrl}> view repo </a>
              </div>
            )}

            {details.techStack.length > 0 && (
              <div className='mt-2'>
                {details.techStack.map((t) => (
                  <div key={t} className='inline text-white py-1 mx-1 px-3 font-light rounded-full bg-green-600'>
                    {t}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}
