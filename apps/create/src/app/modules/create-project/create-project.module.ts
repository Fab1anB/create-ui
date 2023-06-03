import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {CreateProjectViewComponent} from './pages/create-project-view/create-project-view.component';
import {HttpClientModule} from '@angular/common/http';
import {ProjectCreateComponent} from './components/project-create/project-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {CommonUiModule} from '@create-ui/common-ui';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {ProjectViewComponent} from './components/project-view/project-view.component';

@NgModule({
  declarations: [
    CreateProjectViewComponent,
    ProjectCreateComponent,
    ProjectViewComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgOptimizedImage,
    CommonUiModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
  ],
})
export class CreateProjectModule {}
