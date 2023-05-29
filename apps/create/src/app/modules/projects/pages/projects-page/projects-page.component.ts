import {Component} from '@angular/core';
import {ProjectApiService} from "../../services/project-api.service";

@Component({
  selector: 'create-ui-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent {

  projects$ = this.projectsService.getProjects();

  constructor(private projectsService: ProjectApiService) {
}
}
