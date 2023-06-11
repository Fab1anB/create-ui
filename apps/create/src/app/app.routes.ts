import {Route} from '@angular/router';
import {
  CreateProjectViewComponent
} from './modules/create-project/pages/create-project-view/create-project-view.component';
import {
  ProjectsViewComponent,
  searchProjectsResolverFn,
} from './modules/view-projects/pages/projects-view/projects-view.component';
import {HomeViewComponent} from './modules/view-projects/pages/home-view/home-view.component';
import {ProjectViewComponent} from './modules/create-project/components/project-view/project-view.component';
import {
  ProjectStepCreateComponent
} from './modules/create-project/components/project-step-create/project-step-create.component';

export const appRoutes: Route[] = [
  { path: 'create', component: CreateProjectViewComponent },
  {
    path: 'projects',
    component: ProjectsViewComponent,
    resolve: { data: searchProjectsResolverFn },
  },
  {
    path: 'projects/:id',
    component: ProjectViewComponent,
  },
  {
    path: 'projects/:id/steps/create',
    component: ProjectStepCreateComponent,
  },
  { path: '**', component: HomeViewComponent },
];
