import { initialCourse } from './../../models/course.model';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ICourse } from 'src/app/shared/interfaces';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
} from '@angular/core';
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseComponent {
  @Input() course: ICourse = initialCourse;
  @Output() buttonsVisible: boolean = false;
  authorList: string[] = [];
  buttonTitle: string = 'Show course';
  editButton: IconDefinition = faPencil;
  deleteButton: IconDefinition = faTrash;

  showButtons(): void {
    this.buttonsVisible = !this.buttonsVisible;
  }
}
