// project.types.ts
export interface Project {
  name: string;
  description: string;
  link: string;
  tech: string[];
  stars?: number;
  forks?: number;
}
