export interface ProjectCategory {
  title: string;
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  resultImage: string;
  categories: ProjectCategory[];
}

export type CreateProject = Omit<Project, 'id'>;

