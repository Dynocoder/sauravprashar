export interface PortfolioData {
  name: string;
  skills: {
    [category: string]: string[];
  };
  experience: Experience[];
  projects: Project[];
  socials: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  skills?: string[];
}

export interface Project {
  name: string;
  description: string;
  github_link?: string;
  deployment_link?: string;
  skills: string[];
}
