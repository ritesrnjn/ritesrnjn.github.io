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

export const Language = (
  {name, level, score}:
  {name: string, score: number, level: string}
) => {
  return (
    <div className='flex justify-between'>
      <div className='text-lg text-fuchsia-950'>{name}</div>
      <div className='flex'>
        <div className='text-gray-500 text-base mr-2'>{level}</div>
        <RatingCircles stars={score}/>
      </div>
    </div>
  )
}
