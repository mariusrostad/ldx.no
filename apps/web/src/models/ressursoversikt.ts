export interface Ressursoversikt {
  periods: Period[]
}

export interface Period {
  entries: PeriodEntries[]
  week: string
}

export interface PeriodEntries {
  user: User
  status: ConsultantStatus
  project?: Project
}

export type ConsultantStatus = "project" | "reserved" | "available"

export interface Project {
  name: string
  customer?: string
}

export interface User {
  id: number
  name: string
}
