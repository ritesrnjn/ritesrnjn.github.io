import type {Metadata} from 'next'
import Link from 'next/link'
import {AtSymbolIcon, LinkIcon, MapPinIcon, UserIcon} from '@heroicons/react/24/outline'
import {AddExperience, Experience} from '@/app/resume/Experience'
import {Education as EducationType, Experience as ExperienceType, Resume,} from '@/types/resume'
import {Language, ProgrammingLanguage} from '@/app/resume/Levels'
import KeyAchievement from '@/app/resume/KeyAchievement'
import resumeData from '@/config/resume/main.json'
import workExperiencesData from '@/config/resume/experiences.json'

export const metadata: Metadata = {
  title: 'My Resume',
  description: 'My Resume'
}

export default function ResumePage() {
  const resume: Resume = resumeData

  return (
    <div className='max-w-screen-xl mx-auto my-12'>
      <Intro resume={resume}/>
      <div className='mt-4 mb-6 grid gap-6 grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-1 sm:col-span-7'>
          <LeftSection resume={resume}/>
        </div>
        <div className='col-span-1 sm:col-span-5'>
          <RightSection resume={resume}/>
        </div>
      </div>
      <Footer/>
    </div>
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
        {resume.addExperiences.map((exp) => (
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
          {resume.skills.map((tag, i) => (
            <div className='inline-flex justify-center items-center' key={tag}>
              <span className='text-fuchsia-950 border-b-2 my-1.5'>{tag}</span> {i < resume.skills.length - 1 ? (<span>&nbsp;•&nbsp;</span>) : ""}
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

function Footer() {
  return <>
    <hr className='mt-8'/>

    <div className='text-center'>
      <div className='font-light mt-6 text-gray-400'>
        last update: March 2024
        <br/>
        online version: https://ranjanritesh.com/resume
        <br/>
        <a href='/resume.pdf' className='print:hidden flex justify-center' target='_blank'>
          <svg className='fill-[#e24045]' xmlns='http://www.w3.org/2000/svg' width='24' height='24'
               viewBox='0 0 24 24'>
            <path
              d='M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M10.92,12.31C10.68,11.54 10.15,9.08 11.55,9.04C12.95,9 12.03,12.16 12.03,12.16C12.42,13.65 14.05,14.72 14.05,14.72C14.55,14.57 17.4,14.24 17,15.72C16.57,17.2 13.5,15.81 13.5,15.81C11.55,15.95 10.09,16.47 10.09,16.47C8.96,18.58 7.64,19.5 7.1,18.61C6.43,17.5 9.23,16.07 9.23,16.07C10.68,13.72 10.9,12.35 10.92,12.31M11.57,13.15C11.17,14.45 10.37,15.84 10.37,15.84C11.22,15.5 13.08,15.11 13.08,15.11C11.94,14.11 11.59,13.16 11.57,13.15M14.71,15.32C14.71,15.32 16.46,15.97 16.5,15.71C16.57,15.44 15.17,15.2 14.71,15.32M9.05,16.81C8.28,17.11 7.54,18.39 7.72,18.39C7.9,18.4 8.63,17.79 9.05,16.81M11.57,11.26C11.57,11.21 12,9.58 11.57,9.53C11.27,9.5 11.56,11.22 11.57,11.26Z'>
            </path>
          </svg>
          <span className='text-green-600'>
              PDF Version
            </span>
        </a>
      </div>
    </div>
  </>
}
