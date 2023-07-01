import {Component, Input} from '@angular/core';
import {ProjectStep} from "../../models/project-step";

@Component({
  selector: 'create-ui-project-step-view',
  templateUrl: './project-step-view.component.html',
  styleUrls: ['./project-step-view.component.scss'],
})
export class ProjectStepViewComponent {
  @Input()
  public projectStep: ProjectStep | null = null;

  @Input()
  public index: number | null = null;
}
