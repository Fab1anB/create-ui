import { Component, Input } from '@angular/core';
import { Project } from '../../../create-project/models/project';

@Component({
  selector: 'create-ui-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.scss'],
})
export class ViewProjectComponent {
  @Input() project: Project | undefined;
}
