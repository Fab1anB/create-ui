import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectsViewComponent} from './pages/projects-view/projects-view.component';
import {ProjectPreviewComponent} from './components/view-project/project-preview.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {TrendingSearchesComponent} from './components/trending-searches/trending-searches.component';
import {ChipsSearchComponent} from './components/chips-search/chips-search.component';
import {InputSearchComponent} from './components/input-search/input-search.component';
import {HomeViewComponent} from './pages/home-view/home-view.component';
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    ProjectsViewComponent,
    ProjectPreviewComponent,
    TrendingSearchesComponent,
    ChipsSearchComponent,
    InputSearchComponent,
    HomeViewComponent,
  ],
  imports: [CommonModule, MatCardModule, MatButtonModule, MatChipsModule, MatIconModule, MatFormFieldModule, MatInputModule],
  exports: [ProjectsViewComponent, ProjectPreviewComponent],
})
export class ViewProjectsModule {}
