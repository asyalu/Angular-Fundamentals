import { CoursesStateFacade } from './../../store/courses/courses.facade';
import { IAuthor, ICourse } from 'src/app/shared/interfaces';
import { CoursesService } from 'src/app/services/courses.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthorsService } from 'src/app/services/authors.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap, Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-edit-course',
  templateUrl: './add-edit-course.component.html',
  styleUrls: ['./add-edit-course.component.scss'],
})
export class AddEditCourseComponent implements OnInit, OnDestroy {
  isCreate = true;
  form!: FormGroup;
  authorList: IAuthor[] = [];
  course!: ICourse;
  deleteButton: IconDefinition = faTrash;
  routeSub!: Subscription;
  coursesSub!: Subscription;
  authSub!: Subscription;

  constructor(
    private authorsService: AuthorsService,
    private route: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesService,
    private coursesStateFacade: CoursesStateFacade
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      duration: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      author: new FormControl(null),
    });

    this.routeSub = this.route.params
      .pipe(
        switchMap((params: Params): any => {
          if (params['id']) {
            this.isCreate = false;
            return this.coursesStateFacade.getSingleCourse(params['id']);
          }
        })
      )
      .subscribe();

    this.coursesSub = this.coursesStateFacade.course$.subscribe((course) => {
      this.course = course;
      course.authors.forEach((author: string) => this.getAuthor(author));
      this.form.patchValue({
        title: course.title,
        description: course.description,
        duration: course.duration,
      });
    });
  }

  getAuthor(id: string) {
    return this.authorsService
      .getAuthor(id)
      .subscribe((author) => this.authorList.push(author.result));
  }

  createAuthor(name: string) {
    this.authSub = this.authorsService.addAuthor(name).subscribe((author) => {
      this.authorList.push(author.result);
      this.form.patchValue({
        author: '',
      });
    });
  }

  deleteAuthor(id: string) {
    this.authorList = this.authorList.filter((item) => item.id != id);
  }

  onSubmit(): void {
    let obs$;
    if (this.isCreate) {
      obs$ = this.coursesService.createCourse({
        title: this.form.value.title,
        duration: +this.form.value.duration,
        description: this.form.value.description,
        authors: this.authorList.map((author) => author.id),
        creationDate: new Date(),
      });
    } else {
      obs$ = this.coursesService.editCourse({
        title: this.form.value.title,
        description: this.form.value.description,
        authors: this.authorList.map((author) => author.id),
        duration: +this.form.value.duration,
        creationDate: this.course.creationDate,
        id: this.course.id,
      });
    }

    obs$.subscribe(() => {
      this.router.navigate(['/courses']);
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.coursesSub.unsubscribe();
    this.authSub.unsubscribe();
  }
}
