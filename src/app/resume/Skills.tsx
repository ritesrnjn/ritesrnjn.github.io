
const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} focusable="false" viewBox="0 0 24 24" aria-hidden="true" width="24" height="24">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
  </svg>
);

const RatingStars = ({ stars }: { stars: number }) => (
  <div className="flex">
    {[...Array(5)].map((star, i) => (
      <StarIcon key={`star-${i}`} className={`text-base ${i < stars ? 'fill-green-500' : 'fill-gray-400'}`} />
    ))}
  </div>

);

export default function Skills(props) {
  const { skills } = props;

  return (
    <div>
      <div className="text-xl">
        {skills.title}
      </div>

      {/* languages */}
      <div className="mb-4">
        <div>
          <h5 className="text-xl font-light">
            {skills.languages.title}
          </h5>

          {skills.languages.levels.map(level => (
            <div key={level.name} className="flex width-full">
              <RatingStars stars={level.stars} />
              <p className="text-lg font-light ml-4">
                {level.languages.join(', ')}
              </p>
            </div>
          ))}

        </div>
      </div>

      <div className="mb-4">
        <div className="text-xl font-light">
          {skills.web.title}
        </div>
        {skills.web.tech.map((t) => (
          <div key={t[0]}>
            <div className="text-lg font-light">
              {t.join(' – ')}
            </div>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <div className="text-xl font-light">
          {skills.other.title}
        </div>
        {skills.other.tech.map((t) => (
          <div key={t[0]}>
            <div className="text-lg font-light">
              {t.join(' – ')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
