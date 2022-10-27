import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ICourse } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesComponent {
  courses: ICourse[] = [];
  infoTitle: string = 'Your list is empty';
  infoText: string = `Please use the 'Add new course' button to add your first course`;
  infoButtonTitle: string = 'Add new course';

  getSearch(value: string): void {
    console.log(value);
  }
}
