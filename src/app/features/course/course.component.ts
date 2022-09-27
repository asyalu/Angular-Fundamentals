import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ICourse, courses } from './../../models/item';
import { Component, Input, OnInit, Output } from '@angular/core';
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  @Input() course: ICourse = courses[0];
  @Output() buttonsVisible: boolean = false;
  buttonTitle: string = 'Show course';
  editButton: IconDefinition = faPencil;
  deleteButton: IconDefinition = faTrash;
  constructor() {}

  showButtons() {
    this.buttonsVisible = !this.buttonsVisible;
  }

  ngOnInit(): void {}
}
