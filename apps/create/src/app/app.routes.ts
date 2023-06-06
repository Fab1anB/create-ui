import {Route} from '@angular/router';
import {
  CreateProjectViewComponent
} from './modules/create-project/pages/create-project-view/create-project-view.component';
import {
  ProjectsViewComponent,
  searchProjectsResolverFn,
} from './modules/view-projects/pages/projects-view/projects-view.component';
import {HomeViewComponent} from './modules/view-projects/pages/home-view/home-view.component';

export const appRoutes: Route[] = [
  { path: 'create', component: CreateProjectViewComponent },
  {
    path: 'projects',
    component: ProjectsViewComponent,
    resolve: { data: searchProjectsResolverFn },
  },
  { path: '**', component: HomeViewComponent },
];
