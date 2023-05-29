import { Route } from '@angular/router';
import {ProjectsPageComponent} from "./modules/projects/pages/projects-page/projects-page.component";

export const appRoutes: Route[] = [
  {path: '', component: ProjectsPageComponent}
];
