import { Subscription } from 'rxjs';
import { CoursesStateFacade } from './../../store/courses/courses.facade';
import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ICourse } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit, OnDestroy {
  courses!: ICourse[];
  searchText!: string;
  infoTitle: string = 'Your list is empty';
  infoText: string = `Please use the 'Add new course' button to add your first course`;
  infoButtonTitle: string = 'Add new course';
  fetch: boolean = false;
  coursesSub!: Subscription;

  constructor(
    private coursesStateFacade: CoursesStateFacade,
    private router: Router
  ) {}

  ngOnDestroy(): void {
    this.coursesSub.unsubscribe();
  }

  ngOnInit(): void {
    this.coursesStateFacade.getAllCourses();
    this.getCourses();
  }

  getCourses() {
    this.fetch = true;
    this.coursesSub = this.coursesStateFacade.allCourses$.subscribe(
      (courses) => {
        this.courses = courses;
        this.fetch = false;
      }
    );
  }

  addCourse(): void {
    this.router.navigate(['/courses/add']);
  }

  deleteCourse(id: string): void {
    this.coursesStateFacade.deleteCourse(id);
  }

  getSearch(value: string) {
    this.searchText = value;
  }
}
