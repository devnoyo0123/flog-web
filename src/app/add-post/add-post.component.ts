import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.less'],
})
export class AddPostComponent {
  validateForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.validateForm = this.formBuilder.group({
      title: '',
      editor: '',
    });
  }
}
