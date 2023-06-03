import { Route } from '@angular/router';
import { CreateProjectViewComponent } from './modules/create-project/pages/create-project-view/create-project-view.component';
import { ProjectsViewComponent } from './modules/view-projects/pages/projects-view/projects-view.component';

export const appRoutes: Route[] = [
  { path: 'create', component: CreateProjectViewComponent },
  { path: '', component: ProjectsViewComponent },
];
