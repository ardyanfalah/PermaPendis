import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-create-webinar',
  templateUrl: './create-webinar.component.html',
  styleUrls: ['./create-webinar.component.scss']
})
export class CreateWebinarComponent implements OnInit {

  public Editor = ClassicEditor;

  constructor() { }

  ngOnInit(): void {
  }

  setEditor(){
    var editorOptions = {
      // enable file uploads from CKEditor
      filebrowserImageUploadUrl: '/admin/upload'
    };
  }

}
