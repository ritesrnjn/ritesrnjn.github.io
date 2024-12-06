import resumeData from '@/config/resume.json'
import workExperiencesData from '@/config/work_experiences.json'
import Experience from '@/app/resume/Experience'
import Skills from '@/app/resume/Skills'
import AddExperience from '@/app/resume/AddExperience'
import {Details, Education as EducationType, Resume, Experience as ExperienceType } from '@/types/resume'
import type {Metadata} from 'next'
import {AtSymbolIcon, LinkIcon, MapPinIcon, UserIcon} from '@heroicons/react/24/outline'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'My Resume',
  description: 'My Resume'
}

function Section({title, children}: {title: string, children: any}) {
  return (
    <div className='mb-6'>
      <h6 className='text-md text-gray-400 uppercase tracking-wide mb-1'>
        {title}
      </h6>

      <div>
        {children}
      </div>
    </div>
  )
}

export default function ResumePage() {
  const resume: Resume = resumeData
  const workExperiences: ExperienceType[] = workExperiencesData

  return (
    <div className='max-w-screen-lg mx-auto my-12'>

      <Intro details={resume.details}/>

      <div className='mt-4 mb-6 grid gap-8 grid-cols-1 sm:grid-cols-12 '>
        <div className='col-span-1 sm:col-span-8'>
          <Section title='Summary'>
            <p className='mb-2 font-light'>{resume.summary}</p>
          </Section>
          <Section title='Experience'>
            {workExperiences.map((exp) => (
              <Experience key={exp.duration} exp={exp} />
            ))}
          </Section>
          <Section title='Additional Experiences'>
            {resume.addExperiences.map((exp) => (
              <AddExperience key={exp.name} spare={exp}/>
            ))}
          </Section>
        </div>

        <div className='col-span-1 sm:col-span-4'>
          <Section title='Education'>
            {resume.education.map((edu) => (
              <Education key={edu.begin} edu={edu}/>
            ))}
          </Section>
          <Section title='Skills'>
            <Skills skills={resume.skills}/>
          </Section>
          <Section title='Languages'>
            <div className='font-light'>
              English - Advanced<br/>
              Hindi - Native<br/>
              Spanish - Basic
              <span className='ml-2 text-xl'>{resume.details.languages.join(', ')}</span>
            </div>
          </Section>
        </div>
      </div>

      <Footer/>

    </div>
  )
}

function Intro({details}: { details: Details }) {
  const classes = {
    item: 'flex items-center text-gray-600 mr-3',
    icon: 'size-4 mr-0.5'
  }

  return (
    <div className='mb-6'>
      <h1 className='font-light text-5xl text-green-600'>
        {details.name}
      </h1>
      <div className='font-light text-xl tracking-wide ml-0.5'>
        {details.designation}
      </div>
      <div className='block sm:flex font-light'>
        <div className={classes.item}>
          <UserIcon className={classes.icon}/>
          <Link href={`https://${details.website}`} target='_blank'>{details.website}</Link>
        </div>
        <div className={classes.item}>
          <AtSymbolIcon className={classes.icon}/>
          <Link href={`mailto:${details.email}`} target='_blank'>{details.email}</Link>
        </div>
        <div className={classes.item}>
          <LinkIcon className={classes.icon}/>
          <Link href={`https://${details.linkedIn}`} target='_blank'>{details.linkedIn}</Link>
        </div>
        <div className={classes.item}>
          <MapPinIcon className={classes.icon}/> {details.location}
        </div>
      </div>
    </div>
  )
}

function Education({edu}: {edu: EducationType}) {
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
