import resume from '@/config/resume.json'
import Education from '@/app/resume/Education'
import Experience from '@/app/resume/Experience';
import Skills from '@/app/resume/Skills'

function Section({ title, children }) {
  return (
    <div className='mt-4 grid gap-6 grid-cols-1 md:grid-cols-12'>
      <div className="col-span-1 md:col-span-2">
        <h6 className="text-xl">
          {title}
        </h6>
      </div>

      <div className='col-span-1 md:col-span-10'>
        {children}
      </div>
    </div>
  )
}

export default function ResumePage() {
  const { contact, experience, education, skills, spare, personalDetails } = resume;

  return (
    <div className="max-w-screen-md mx-auto my-6">

      {/*  Intro */}

      <Section title='Experience'>
        {experience.map((exp) => (
          <Experience key={exp.duration} exp={exp} />
        ))}
      </Section>


      <Section title="Education">
        {education.map((edu) => (
          <Education key={edu.begin} edu={edu} />
        ))}
      </Section>

      <Section title="Skills">
        <Skills skills={skills} />
      </Section>

      {/*<Section title="Spare Time">*/}
      {/*  {spare.map((spare) => (*/}
      {/*    <Spare key={spare.title} spare={spare} />*/}
      {/*  ))}*/}
      {/*</Section>*/}

      <Section title="Personal Details">
          {personalDetails.map((d) => (
            <div key={d.name}>
              <div className='font-light'>
                <span className='text-lg'>{d.name} –</span>
                <span className='ml-2 text-xl'>{d.value}</span>
              </div>
            </div>
          ))}

      </Section>

      <hr style={{ marginTop: '2em' }} />

      <div className='text-center'>
        <div className='font-light mt-8 text-gray-400'>
          last update: May 2022
          <br />
          online version: https://ranjanritesh.com/#/resume
        </div>
      </div>

    </div>
  )
}