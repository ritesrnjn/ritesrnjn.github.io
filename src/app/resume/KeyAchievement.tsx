import {AcademicCapIcon, FlagIcon, LightBulbIcon, PuzzlePieceIcon, ScissorsIcon} from '@heroicons/react/24/outline'
import {KeyAchievement as KeyAchievementType} from '@/types/resume'

const getIconComponent = (icon: string) => ({
  'AcademicCapIcon': AcademicCapIcon,
  'PuzzlePieceIcon': PuzzlePieceIcon,
  'FlagIcon': FlagIcon,
  'LightBulbIcon': LightBulbIcon,
  'ScissorsIcon': ScissorsIcon
}[icon])

export default function KeyAchievement({icon, title, desc}: KeyAchievementType) {
  const IconElement: any = getIconComponent(icon)
  return (
    <div className='mb-2'>
      <div className='flex items-center text-fuchsia-950'>
        {IconElement && <IconElement icon={icon} className='w-6 h-6 mr-2'/>}
        <div className='text-lg'>{title}</div>
      </div>
      <div className='text-md text-gray-800 font-light'>{desc}</div>
    </div>
  )
}
