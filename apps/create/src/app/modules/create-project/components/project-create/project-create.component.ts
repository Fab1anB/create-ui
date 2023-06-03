import {Component, effect, inject, Input, signal, ViewChild,} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {FileUploadComponent} from '../../../../../../../../libs/common-ui/src/lib/file-upload/file-upload.component';
import {MatChipEditedEvent, MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {Project, ProjectCategory} from "../../models/project";

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

  public add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      const old: ProjectCategory [] = this.form().get('categories')?.value || [];
      this.form().get('categories')?.patchValue([...old, {title: value}]);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  public remove(category: string): void {
    const categories: ProjectCategory [] = this.form().get('categories')?.getRawValue() || [];
   const index = categories.findIndex((c) => c.title === category);

    if (index >= 0) {
      categories.splice(index, 1);
      this.form().get('categories')?.patchValue(categories);
    }
  }

  public edit(category: string, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove fruit if it no longer has a name
    if (!value) {
      this.remove(category);
      return;
    }

    // Edit existing fruit
    const categories: ProjectCategory [] = this.form().get('categories')?.getRawValue() || []
    const index = categories.indexOf({title: category} as ProjectCategory);
    if (index >= 0) {
      categories[index].title = value;
      this.form().get('categories')?.patchValue(categories);
    }
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
        form.append('categories', JSON.stringify(this.form().get('categories')?.value));
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
