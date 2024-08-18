import resume from '@/config/resume.json'
import Intro from '@/app/resume/Intro'
import Education from '@/app/resume/Education'
import Experience from '@/app/resume/Experience'
import Skills from '@/app/resume/Skills'
import Spare from '@/app/resume/SpareTime'
import {Resume} from '@/types/resume'
import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'My Resume',
  description: 'My Resume'
}

function Section({title, children}: {title: string, children: any}) {
  return (
    <div className='mt-4 grid gap-0 sm:gap-12 grid-cols-1 sm:grid-cols-12 mb-6'>
      <div className='col-span-1 sm:col-span-2'>
        <h6 className='text-2xl text-green-600 font-light'>
          {title}
        </h6>
      </div>

      <div className='col-span-1 sm:col-span-10 mt-1'>
        {children}
      </div>
    </div>
  )
}

export default function ResumePage() {
  const resumeData: Resume = resume
  const {contact, experience, education, skills, spare, personalDetails} = resumeData

  return (
    <div className='max-w-[960px] mx-auto my-12'>

      <Intro details={contact} />
      <hr className='mb-8' />

      <Section title='Summary'>
        <p className='mb-2 font-light'>
          Hey there, I&apos;m Ritesh Ranjan - a full stack developer based in the vibrant city of Barcelona. With over 9
          years of experience in the tech industry, I have developed a diverse skill set that allows me to tackle any
          project with ease.
        </p>
        <p className='mb-2 font-light'>
          My passion for coding and problem-solving started early on in my career, and I have been honing my skills ever
          since. From developing websites and web applications to creating mobile apps, I love taking on new challenges
          and pushing myself to learn something new every day.
        </p>
        <p className='mb-2 font-light'>
          One of the things I love most about being a full stack developer is the ability to work on both the front-end
          and back-end of a project. This gives me a holistic understanding of the development process and allows me to
          create seamless and efficient solutions for my clients.
        </p>
        <p className='mb-2 font-light'>
          In my free time, you can find me exploring the beautiful streets of Barcelona, trying out new recipes in my
          kitchen, or catching up on the latest tech trends. I am also an avid traveler and love to immerse myself in
          different cultures and experiences.
        </p>
      </Section>

      <Section title='Experience'>
        {experience.map((exp) => (
          <Experience key={exp.duration} exp={exp} />
        ))}
      </Section>

      <Section title='Education'>
        {education.map((edu) => (
          <Education key={edu.begin} edu={edu} />
        ))}
      </Section>

      <Section title='Skills'>
        <Skills skills={skills} />
      </Section>

      <Section title='Spare Time'>
        {spare.map((spare) => (
          <Spare key={spare.title} spare={spare} />
        ))}
      </Section>

      <Section title='Personal Details'>
        {personalDetails.map((d) => (
          <div key={d.name}>
            <div className='font-light'>
              <span className='text-lg'>{d.name} –</span>
              <span className='ml-2 text-xl'>{d.value}</span>
            </div>
          </div>
        ))}

      </Section>

      <hr className='mt-8' />

      <div className='text-center'>
        <div className='font-light mt-6 text-gray-400'>
          last update: March 2024
          <br />
          online version: https://ranjanritesh.com/resume
        </div>
      </div>

    </div>
  )
}
