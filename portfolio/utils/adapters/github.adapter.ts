// github.adapter.ts

import { GithubRepo } from "./github.types";
import { Project } from "./project.types";


export function mapGithubRepoToProject(repo: GithubRepo): Project {
  return {
    name: repo.name.replace(/_/g, ' '),
    description: repo.description ?? 'Sin descripción',
    link: repo.html_url,
    tech: [
      ...(repo.language ? [repo.language] : []),
      ...(repo.topics ?? []),
    ],
    stars: repo.stargazers_count,
    forks: repo.forks_count,
  };
}