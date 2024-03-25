export interface Resume {
  contact: ContactType
  experience: ExperienceType[]
  education: EducationType[]
  skills: SkillsType
  spare: SpareType[]
  personalDetails: PersonalDetailType[]
}

export interface ContactType {
  name: string
  about: string
  designation: string
  email: string
  linkedIn: string
  website: string
  website_full: string
}

export interface ExperienceType {
  duration: string
  designation: string
  company: string
  projects: ProjectType[]
}

export interface ProjectType {
  title: string
  techStack: string[]
  description: string
}

export interface EducationType {
  begin: string
  end: string
  degree: string
  stream: string
  school: string
  university: string
  location: string
}

export interface SkillsType {
  title: string
  languages: LanguagesType
  web: WebType
  other: OtherType
}

export interface LanguagesType {
  title: string
  levels: LevelType[]
}

export interface LevelType {
  name: string
  stars: number
  languages: string[]
}

export interface WebType {
  title: string
  tech: string[][]
}

export interface OtherType {
  title: string
  tech: string[][]
}

export interface SpareType {
  title: string
  desc: string
  repo?: string
  stack?: string[]
}

export interface PersonalDetailType {
  name: string
  value: string
}
