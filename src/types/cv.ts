export interface CVBasics {
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  url: string;
  summary: string;
  location: {
    city: string;
    region: string;
  };
  profiles: {
    network: string;
    username: string;
    url: string;
  }[];
}

export interface Project {
  name: string;
  url: string;
  description: string;
  highlights: string[];
  isActive: boolean;
}

export interface WorkExperience {
  name: string;
  position: string;
  startDate: string;
  endDate?: string;
  summary: string;
  highlights: string[];
  url: string
}

export interface Education {
  institution: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate?: string;
}

export interface Skill {
  name: string;
  keywords: string[];
}

export interface Languages {
  language: string,
  fluency: string
}

export interface CV {
  basics: CVBasics;
  work: WorkExperience[];
  education: Education[];
  projects: Project[];
  skills: Skill[];
  languages: Languages[]
}