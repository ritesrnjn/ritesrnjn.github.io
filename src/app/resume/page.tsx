import type {Metadata} from 'next'
import Link from 'next/link'
import {AtSymbolIcon, LinkIcon, MapPinIcon, UserIcon} from '@heroicons/react/24/outline'
import {AddExperience, Experience} from '@/app/resume/Experience'
import {Education as EducationType, Experience as ExperienceType, Resume,} from '@/types/resume'
import {Language, ProgrammingLanguage} from '@/app/resume/Levels'
import KeyAchievement from '@/app/resume/KeyAchievement'
import resumeData from '@/config/resume/main.json'
import workExperiencesData from '@/config/resume/experiences.json'
import addExperiences from '@/config/resume/add_experience.json'

export default function ResumePage() {
  const resume: Resume = resumeData

  return (
    <>
      <Intro resume={resume}/>
      <div className='mt-4 mb-6 grid gap-6 grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-1 sm:col-span-7'>
          <LeftSection resume={resume}/>
        </div>
        <div className='col-span-1 sm:col-span-5'>
          <RightSection resume={resume}/>
        </div>
      </div>
    </>
  )
}

function LeftSection({resume}: { resume: Resume }) {
  const workExperiences: ExperienceType[] = workExperiencesData
  return (
    <>
      <Section title='Summary'>
        <p className='mb-2 font-light'>{resume.summary.map(line => `${line} `)}</p>
      </Section>
      <Section title='Experience'>
        {workExperiences.map((exp) => (
          <Experience key={exp.duration} exp={exp}/>
        ))}
      </Section>
      <Section title='Additional Experiences'>
        {addExperiences.map((exp) => (
          <AddExperience key={exp.name} project={exp}/>
        ))}
      </Section>
    </>
  )
}

function RightSection({resume}: { resume: Resume }) {
  return (
    <>
      <Section title='Key Achievements'>
        {resume.keyAchievements.map((achievement) => (
          <KeyAchievement key={achievement.title} {...achievement}/>
        ))}
      </Section>
      <Section title='Programing Languages'>
        {resume.programmingLanguages.map(level => (
          <ProgrammingLanguage  key={level.name} items={level.items} name={level.name||''} score={level.score} />
        ))}
      </Section>
      <Section title='Skills'>
        <div className='text-lg font-light'>
          {resume.skills.map((skill, i) => (
            <div className='inline-flex justify-center items-center' key={skill}>
              <span className='text-fuchsia-950 border-b-2 my-1.5'>{skill}</span>
              {i < resume.skills.length - 1 ? (<span>&nbsp;•&nbsp;</span>) : null}
            </div>
          ))}
        </div>
      </Section>
      <Section title='Education'>
        {resume.education.map((edu) => (
          <Education key={edu.duration} edu={edu}/>
        ))}
      </Section>
      <Section title='Languages'>
        {resume.languages.map(level => (
          <Language key={level.name} items={level.items} name={level.name||''} score={level.score} />
        ))}
      </Section>
    </>
  )
}

function Section({title, children}: { title: string, children: any }) {
  return (
    <div className='mb-6'>
      <h6 className='text-md text-gray-500 uppercase tracking-wide mb-1'>
        {title}
      </h6>

      <div>
        {children}
      </div>
    </div>
  )
}

function Intro({resume}: { resume: Resume }) {
  const classes = {
    item: 'flex items-center text-gray-800 text-lg mr-3',
    icon: 'size-4 mr-0.5 text-gray-800'
  }

  return (
    <div className='mb-8'>
      <h1 className='font text-5xl text-fuchsia-950 mb-3'>
        {resume.name}
      </h1>
      <div className='text-2xl text-fuchsia-950 ml-0.5 mb-1'>
        {resume.highlights.join(' | ')}
      </div>
      <div className='block sm:flex font-light'>
        <div className={classes.item}>
          <UserIcon className={classes.icon}/>
          <Link href={`https://${resume.website}`} target='_blank'>{resume.website}</Link>
        </div>
        <div className={classes.item}>
          <AtSymbolIcon className={classes.icon}/>
          <Link href={`mailto:${resume.email}`} target='_blank'>{resume.email}</Link>
        </div>
        <div className={classes.item}>
          <LinkIcon className={classes.icon}/>
          <Link href={`https://${resume.linkedIn}`} target='_blank'>{resume.linkedIn}</Link>
        </div>
        <div className={classes.item}>
          <MapPinIcon className={classes.icon}/> {resume.location}
        </div>
      </div>
    </div>
  )
}

function Education({edu}: { edu: EducationType }) {
  return (
    <div>
      <div className=''>
        <div className='text-xl font-normal text-fuchsia-950'>
          {edu.degree}
        </div>
      </div>

      <div className='text-lg font-normal text-fuchsia-950'>
        {edu.institute}
      </div>
      <div className='text-lg font-thin text-gray-500'>
        <span className='mr-4'> {edu.duration}</span>
        <span className=''>{edu.location}</span>
      </div>
    </div>
  )
}
