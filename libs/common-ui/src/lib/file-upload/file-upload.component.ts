import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { take } from 'rxjs';

@Component({
  selector: 'create-ui-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {
  uploader: FileUploader;
  hasBaseDropZoneOver: boolean;
  response: string;

  constructor() {
    this.uploader = new FileUploader({
      url: 'http://localhost:3000/projects',
      disableMultipart: false,
    });

    this.hasBaseDropZoneOver = false;

    this.response = '';

    this.uploader.response
      .pipe(take(1))
      .subscribe((res) => (this.response = res));
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }
}
