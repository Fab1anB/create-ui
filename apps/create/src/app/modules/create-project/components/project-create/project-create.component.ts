import {Component, effect, inject, Input, signal, ViewChild,} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {FileUploadComponent} from '../../../../../../../../libs/common-ui/src/lib/file-upload/file-upload.component';
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {Project, ProjectCategory} from "../../models/project";
import {ProjectCategoryChipsComponent} from "../project-category-chips/project-category-chips.component";

@Component({
  selector: 'create-ui-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss'],
})
export class ProjectCreateComponent {
  @Input()
  public project: Project | null = null;

  public form = signal(createForm());

  @ViewChild('fileUploadComponent')
  public fileUploadComponent: FileUploadComponent | null = null;

  @ViewChild('projectCategoryChipsComponent')
  public projectCategoryChipsComponent: ProjectCategoryChipsComponent | null = null;

  public addOnBlur = true;
  public readonly separatorKeysCodes = [ENTER, COMMA] as const;

  public difficulty = signal(0);

  constructor() {
    effect(() => {
      if (this.project) {
        this.form().patchValue(this.project);
      }
    });
  }

  public save() {
    if (this.fileUploadComponent?.uploader) {
      this.fileUploadComponent.uploader.onBuildItemForm = (fileItem, form) => {
        form.append('title', this.form().get('title')?.value);
        form.append('subtitle', this.form().get('subtitle')?.value);
        form.append('description', this.form().get('description')?.value);
        if (this.project?.id) {
          form.append('id', this.project?.id?.toString());
        }
        form.append('categories', JSON.stringify(this.projectCategoryChipsComponent?.categoryControl?.value || []));
        form.append('difficulty', this.difficulty());
      };
      this.fileUploadComponent.uploader.uploadAll();
    }
  }

  difficultyChange($event: number) {
   this.difficulty.set($event);
  }
}

export type AddressForm = ReturnType<Address['getRawValue']>;
export type Address = ReturnType<typeof createForm>;

export function createForm() {
  const fb = inject(FormBuilder);
  return fb.group({
    title: fb.control<string>('', [Validators.required]),
    subtitle: fb.control<string>('', [Validators.required]),
    description: fb.control<string>('', [Validators.required]),
    categories: fb.control<ProjectCategory[]>([], [Validators.required]),
  });
}
