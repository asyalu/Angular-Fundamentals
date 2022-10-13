import { Component, OnInit } from '@angular/core';
import { courses, ICourse } from 'src/app/models/item';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: ICourse[] = courses;
  infoTitle: string = 'Your list is empty';
  infoText: string = `Please use the 'Add new course' button to add your first course`;
  infoButtonTitle: string = 'Add new course';

  ngOnInit(): void {}
}
