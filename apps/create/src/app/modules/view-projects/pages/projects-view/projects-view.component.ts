import {Component, inject} from '@angular/core';
import {ProjectsApiService} from '../../services/projects-api.service';
import {ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot,} from '@angular/router';
import {Project} from '../../../create-project/models/project';

export const searchProjectsResolverFn: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const category = route.queryParams['category'];
  const categories = typeof category === 'string' ? [category] : category;
  return inject(ProjectsApiService).getProjects(categories);
};

@Component({
  selector: 'create-ui-create-project-view',
  templateUrl: './projects-view.component.html',
  styleUrls: ['./projects-view.component.scss'],
})
export class ProjectsViewComponent {
  public projects: Project[] = this.activatedRoute.snapshot.data['data'];
  constructor(public activatedRoute: ActivatedRoute) {}
}
