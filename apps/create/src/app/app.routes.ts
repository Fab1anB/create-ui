import { Route } from '@angular/router';
import { ProjectsPageComponent } from './modules/projects/pages/projects-page/projects-page.component';
import { ProjectsViewComponent } from './modules/view-projects/pages/projects-view/projects-view.component';

export const appRoutes: Route[] = [
  { path: 'create', component: ProjectsPageComponent },
  { path: '', component: ProjectsViewComponent },
];
