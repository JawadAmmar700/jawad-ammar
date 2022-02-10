type subSkillType = {
  lng: string
  percent: string
}

type ProjectType = {
  name: string
  src: string
  link: string
  videoUrl: string
  technology: string
  description: string
  site?: string
  span: number
}

type Skills = {
  lng: string
  percent: string
  subSkill: Array<subSkillType>
}

interface Data {
  skills: Array<Skills>
  projects: Array<ProjectType>
}

export type { subSkillType, ProjectType, Skills, Data }
