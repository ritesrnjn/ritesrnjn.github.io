import {Skills} from '@/types/resume'

const StarIcon = ({className}: { className?: string }) => (
  <svg className={className} focusable='false' viewBox='0 0 24 24' aria-hidden='true' width='24' height='24'>
    <path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'></path>
  </svg>
)

const RatingStars = ({stars}: { stars: number }) => (
  <div className='flex'>
    {[...Array(5)].map((star, i) => (
      <StarIcon key={`star-${i}`} className={`text-base ${i < stars ? 'fill-fuchsia-950' : 'fill-gray-300'}`} />
    ))}
  </div>
)


export default function SkillsSection({skills}: { skills: Skills }) {
  return (
    <>
      {/* languages */}
      <div className='mb-4'>
        <div>
          <h5 className='text-lg text-fuchsia-950'>
            {skills.languages.title}
          </h5>



        </div>
      </div>

      <div className='mb-4'>
        <div className='text-lg text-fuchsia-950'>
          {skills.web.title}
        </div>
        {skills.web.tech.map((t:string[]) => (
          <div className='text-md font-light text-gray-500' key={t[0]}>
            {t.join(' • ')}
          </div>
        ))}
      </div>
    </>
  )
}
