export interface IProject {
  name: string;
  slug: string;
  description: string;
  repoUrl: string;
  demoUrl?: string;
  technologies: string[];
  images: string[];
  featured?: boolean;
}

export interface IProjectCardProps {
  project: IProject;
  darkMode: boolean;
}