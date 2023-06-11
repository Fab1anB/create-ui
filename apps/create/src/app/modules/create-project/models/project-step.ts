export interface ProjectCategory {
  title: string;
}

export interface ProjectStep {
  id: number;
  title: string;
  description: string;
  image: string;
}

export type CreateProjectStep = Omit<ProjectStep, 'id'>;

