import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FileUploadComponent} from './file-upload/file-upload.component';
import {FileUploadModule} from 'ng2-file-upload';
import {ProjectDifficultyComponent} from './project-difficulty/project-difficulty.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, FileUploadModule, MatIconModule],
  declarations: [FileUploadComponent, ProjectDifficultyComponent],
  exports: [FileUploadComponent, ProjectDifficultyComponent],
})
export class CommonUiModule {}
