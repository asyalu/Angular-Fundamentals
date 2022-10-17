import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-course',
  templateUrl: './add-edit-course.component.html',
  styleUrls: ['./add-edit-course.component.scss'],
})
export class AddEditCourseComponent implements OnInit {
  isCreate = true;
  form!: FormGroup;
  authorList: any = [];
  course: any = {
    title: '2',
    description: '',
    authors: [],
    created: new Date(),
    duration: null,
  };

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      duration: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
    });
  }
}
