import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ICourse } from 'src/app/shared/interfaces';
import { Component, Input, OnInit, Output } from '@angular/core';
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  @Input() course: ICourse = {
    title: '',
    description: '',
    authors: [],
    created: new Date(),
    duration: 0,
  };
  @Output() buttonsVisible: boolean = false;
  authorList: string[] = [];
  buttonTitle: string = 'Show course';
  editButton: IconDefinition = faPencil;
  deleteButton: IconDefinition = faTrash;

  showButtons(): void {
    this.buttonsVisible = !this.buttonsVisible;
  }

  ngOnInit() {}
}
