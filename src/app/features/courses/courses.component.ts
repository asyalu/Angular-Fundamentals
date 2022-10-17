import { Router } from '@angular/router';
import { AuthorsService } from 'src/app/services/authors.service';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { ICourse } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses!: ICourse[];
  searchText!: string;
  infoTitle: string = 'Your list is empty';
  infoText: string = `Please use the 'Add new course' button to add your first course`;
  infoButtonTitle: string = 'Add new course';
  fetch: boolean = false;

  constructor(private coursesService: CoursesService, private router: Router) {}

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
    this.fetch = true;
    this.coursesService.getAll().subscribe((courses) => {
      this.courses = courses.result;
      this.fetch = false;
    });
  }

  addCourse(): void {
    this.router.navigate(['/courses/add']);
  }

  deleteCourse(id: string): void {
    this.coursesService.deleteCourse(id).subscribe(() => this.getCourses());
  }

  getSearch(value: string) {
    this.searchText = value;
  }
}
