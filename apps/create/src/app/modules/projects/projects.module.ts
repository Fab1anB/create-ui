import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectComponent } from './components/project/project.component';
import { ProjectCreateComponent } from './components/project-create/project-create.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {CommonUiModule} from "@create-ui/common-ui";
import {MatButtonModule} from "@angular/material/button";
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [ProjectsPageComponent, ProjectComponent, ProjectCreateComponent],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, NgOptimizedImage, CommonUiModule, MatButtonModule, MatChipsModule, MatIconModule],
})
export class ProjectsModule {}
