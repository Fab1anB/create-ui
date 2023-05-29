import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload/file-upload.component';
import {FileUploadModule} from "ng2-file-upload";

@NgModule({
  imports: [CommonModule, FileUploadModule],
  declarations: [FileUploadComponent],
  exports: [
    FileUploadComponent
  ]
})
export class CommonUiModule {}
