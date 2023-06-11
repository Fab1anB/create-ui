import {Component, effect, inject, Input, signal, ViewChild,} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {FileUploadComponent} from '../../../../../../../../libs/common-ui/src/lib/file-upload/file-upload.component';
import {ProjectStep} from '../../models/project-step';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'create-ui-project-step-create',
  templateUrl: './project-step-create.component.html',
  styleUrls: ['./project-step-create.component.scss'],
})
export class ProjectStepCreateComponent {
  @Input()
  public projectStep: ProjectStep | null = null;

  public form = signal(createForm());

  @ViewChild('fileUploadComponent')
  public fileUploadComponent: FileUploadComponent | null = null;

  public uploadUrl: string | undefined;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    effect(() => {
      if (this.projectStep) {
        this.form().patchValue(this.projectStep);
      }
    });

    this.uploadUrl = `projects/${this.activatedRoute.snapshot.params['id']}/steps`
  }

  public save() {
    if (this.fileUploadComponent?.uploader) {
      this.fileUploadComponent.uploader.onBuildItemForm = (fileItem, form) => {
        form.append('title', this.form().get('title')?.value);
        form.append('description', this.form().get('description')?.value);
        if (this.projectStep?.id) {
          form.append('id', this.projectStep?.id?.toString());
        }
      };
      this.fileUploadComponent.uploader.uploadAll();
      this.fileUploadComponent.uploader.response.subscribe(async (response) => {
        console.log(
          '=>(project-step-create.component.ts:63) response',
          response
        );
        await this.router.navigate(['../../'], {
          relativeTo: this.activatedRoute,
        });
      });
    }
  }
}

export function createForm() {
  const fb = inject(FormBuilder);
  return fb.group({
    title: fb.control<string>('', [Validators.required]),
    description: fb.control<string>('', [Validators.required]),
  });
}
