export interface TypewriterAction {
  type: 'type' | 'deleteAll' | 'deleteChars' | 'pause';
  text?: string;
  count?: number;
  duration?: number;
}

export interface PortfolioData {
  name: string;
  titles: string[];
  typewriterSequences?: TypewriterAction[];
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
  longDescription?: string;
  skills?: string[];
}

export interface Project {
  name: string;
  description: string;
  longDescription?: string;
  github_link?: string;
  deployment_link?: string;
  skills: string[];
}
