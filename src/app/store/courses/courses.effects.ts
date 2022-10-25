import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { CoursesService } from 'src/app/services/courses.service';
import {
  requestAllCourses,
  requestDeleteCourse,
  requestEditCourse,
  requestCreateCourse,
  requestCreateCourseSuccess,
  requestEditCourseSuccess,
  requestAllCoursesSuccess,
  requestSingleCourse,
  requestSingleCourseSuccess,
} from './courses.actions';

@Injectable()
export class CoursesEffects {
  getAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestAllCourses),
      mergeMap(() =>
        this.coursesService.getAll().pipe(
          map((response) => response.result),
          map((courses) => requestAllCoursesSuccess({ courses }))
        )
      )
    )
  );

  getSingleCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestSingleCourse),
      mergeMap(({ id }) =>
        this.coursesService.getCourse(id).pipe(
          map((response) => response.result),
          map((course) => requestSingleCourseSuccess({ course }))
        )
      )
    )
  );

  deleteCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestDeleteCourse),
      mergeMap(({ id }) =>
        this.coursesService
          .deleteCourse(id)
          .pipe(map(() => requestAllCourses()))
      )
    )
  );

  editCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestEditCourse),
      mergeMap(({ course }) =>
        this.coursesService
          .editCourse(course)
          .pipe(map((course) => requestEditCourseSuccess(course)))
      )
    )
  );

  createCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestCreateCourse),
      mergeMap(({ course }) =>
        this.coursesService
          .createCourse(course)
          .pipe(map((course) => requestCreateCourseSuccess(course)))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private coursesService: CoursesService
  ) {}
}
