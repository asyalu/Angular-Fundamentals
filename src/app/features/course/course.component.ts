import { CoursesService } from './../../services/courses.service';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthorsService } from 'src/app/services/authors.service';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ICourse } from 'src/app/shared/interfaces';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { switchMap, of } from 'rxjs';
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
    creationDate: new Date(),
    duration: 0,
  };
  @Output() deleteButtonAction = new EventEmitter<string>();
  authorList: string[] = [];
  buttonTitle: string = 'Show course';
  editButton: IconDefinition = faPencil;
  deleteButton: IconDefinition = faTrash;
  isView: boolean = true;

  constructor(
    private authorsService: AuthorsService,
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params: Params): any => {
          if (params['id']) {
            this.isView = false;
            return this.coursesService.getCourse(params['id']);
          }

          return of(null);
        })
      )
      .subscribe((course: any) => {
        course.result.authors.map((author: string) => this.getAuthor(author));
        if (course) {
          this.course = { ...course.result, authors: this.authorList };
        }
      });
  }

  getAuthor(id: string) {
    return this.authorsService
      .getAuthor(id)
      .subscribe((author) => this.authorList.push(author.result.name));
  }

  deleteCourse(): void {
    this.deleteButtonAction.emit(this.course.id);
  }
}
