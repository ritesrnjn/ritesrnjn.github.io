export interface Resume {
  details: Details
  summary: string
  education: Education[]
  skills: Skills
  addExperiences: Project[]
}

export interface Details {
  name: string
  about: string
  designation: string
  email: string
  linkedIn: string
  website: string
  website_full: string
  location: string
  languages: string[],
  interests: string[],
}

export interface Experience {
  duration: string
  designation: string
  location: string
  company: string
  logo: string
  projects: Project[]
}

export interface Project {
  role: string
  name: string
  techStack: string[]
  description: string[]
  repo?: string
}

export interface Education {
  begin: string
  end: string
  degree: string
  stream: string
  school: string
  university: string
  location: string
}

export interface Skills {
  title: string
  languages: {
    title: string
    levels: Level[]
  }
  web: {
    title: string
    tech: string[][]
  }
  other: {
    title: string
    tech: string[][]
  }
}

export interface Level {
  name: string
  stars: number
  languages: string[]
}
