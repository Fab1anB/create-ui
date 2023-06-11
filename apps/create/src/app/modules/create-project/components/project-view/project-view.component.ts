import {Component, signal} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Project} from '../../models/project';
import {firstValueFrom, map, Observable, of} from 'rxjs';
import {ProjectApiService} from '../../services/project-api.service';
import {ProjectStep} from "../../models/project-step";
import {ProjectStepsService} from "../../services/project-steps.service";

@Component({
  selector: 'create-ui-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss'],
})
export class ProjectViewComponent {
  public isOwner = signal(false);


  public project$: Observable<Project> =
    this.router.getCurrentNavigation()?.extras.state?.['project'] != null
      ? of(this.router.getCurrentNavigation()?.extras.state?.['project'])
      : this.projectApiService.getProject(
          this.activatedRoute.snapshot.params['id']
        );

  public steps$: Observable<ProjectStep []> = this.projectStepsService.getProjectSteps(this.activatedRoute.snapshot.params['id']);

  constructor(
    private router: Router,
    private projectApiService: ProjectApiService,
    private projectStepsService: ProjectStepsService,
    private activatedRoute: ActivatedRoute
  ) {
    console.log(
      '=>(project-view.component.ts:70) activatedRoute',
      router.getCurrentNavigation()?.extras.state
    );
  }

  public async addStep(): Promise<void> {
    const id = await firstValueFrom(this.project$.pipe(map((project) => project.id)));
    await this.router.navigate([`/projects/${id}/steps/create`]);
  }
}
