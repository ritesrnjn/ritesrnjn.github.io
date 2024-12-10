import {Level} from '@/types/resume'

const CircleIcon = ({className}: { className?: string }) => (
  <svg className={className} focusable='false' viewBox='0 0 24 24' aria-hidden='true' width='32' height='32'>
    <circle cx='8' cy='8' r='8'/>
  </svg>
)

const RatingCircles = ({stars}: { stars: number }) => (
  <div className='flex'>
    {[...Array(5)].map((star, i) => (
      <CircleIcon key={`star-${i}`} className={`text-base ${i < stars ? 'fill-fuchsia-950' : 'fill-gray-300'}`} />
    ))}
  </div>
)

export const Language = (level:Level) => (
  <div className='flex justify-between'>
    <div className='text-lg text-fuchsia-950'>{level.items[0]}</div>
    <div className='flex'>
      <div className='text-gray-500 text-base mr-2'>{level.name}</div>
      <RatingCircles stars={level.score}/>
    </div>
  </div>
)

// PROGRAMMING BLOCK (STAR RATINGS)

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

export const ProgrammingLanguage =  (level:Level) => (
  <div className='flex width-full'>
    <RatingStars stars={level.score}/>
    <div className='text-lg text-fuchsia-950 ml-4'>
      {level.items.join(', ')}
    </div>
  </div>
)
