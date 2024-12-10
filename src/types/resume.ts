export interface Resume {
  name: string
  highlights: string[]
  about: string
  email: string
  linkedIn: string
  website: string
  location: string
  interests: string[],
  summary: string[]
  education: Education[]
  skills: string[]
  programmingLanguages: Level[]
  languages: Level[],
  addExperiences: Project[]
  keyAchievements: KeyAchievement[]
}

export interface KeyAchievement {
  icon: string
  title: string
  desc: string
}

export interface Level {
  name?: string
  score: number
  items: string[]
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
  duration: string
  degree: string
  institute: string
  location: string
}

export interface ProgrammingLanguage {
  name: string
  stars: number
  languages: string[]
}
