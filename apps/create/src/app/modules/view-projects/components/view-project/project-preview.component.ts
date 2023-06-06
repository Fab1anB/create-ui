import {Component, Input} from '@angular/core';
import {Project} from '../../../create-project/models/project';

@Component({
  selector: 'create-ui-project-preview',
  templateUrl: './project-preview.component.html',
  styleUrls: ['./project-preview.component.scss'],
})
export class ProjectPreviewComponent {
  @Input() project: Project | undefined;
}
