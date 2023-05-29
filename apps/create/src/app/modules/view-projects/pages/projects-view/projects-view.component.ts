import { Component } from '@angular/core';
import { ProjectsApiService } from '../../services/projects-api.service';

@Component({
  selector: 'create-ui-projects-view',
  templateUrl: './projects-view.component.html',
  styleUrls: ['./projects-view.component.scss'],
})
export class ProjectsViewComponent {
  public projects$ = this.projectsApiService.getProjects();
  constructor(public projectsApiService: ProjectsApiService) {}


}
