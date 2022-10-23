import { ICourse } from 'src/app/shared/interfaces';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Inscriptions } from 'src/app/shared/enums/enums';

@Component({
  selector: 'app-add-edit-course',
  templateUrl: './add-edit-course.component.html',
  styleUrls: ['./add-edit-course.component.scss'],
})
export class AddEditCourseComponent implements OnInit {
  isCreate = true;
  form!: FormGroup;
  authorList: any = [];
  course!: ICourse;
  isRequired: Inscriptions = Inscriptions.isRequired;

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      duration: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
    });
  }
}
