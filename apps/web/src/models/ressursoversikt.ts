interface Ressursoversikt {
  periods: Period[];
}

interface Period {
  entries: PeriodEntries[];
  week: string;
}

interface PeriodEntries {
  user: User;
  status: ConsultantStatus;
  project?: Project;
}

type ConsultantStatus = "project" | "reserved" | "available";

interface Project {
  name: string;
  customer?: string;
}

interface User {
  id: number;
  name: string;
}
