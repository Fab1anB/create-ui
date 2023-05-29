import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsViewComponent } from './pages/projects-view/projects-view.component';
import { ViewProjectComponent } from './components/view-project/view-project.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatChipsModule} from "@angular/material/chips";

@NgModule({
  declarations: [ProjectsViewComponent, ViewProjectComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule, MatChipsModule],
  exports: [ProjectsViewComponent, ViewProjectComponent],
})
export class ViewProjectsModule {}
