import { IAuthor, ICourse } from './../../shared/interfaces';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  requestAllCourses,
  requestCreateCourse,
  requestDeleteCourse,
  requestEditCourse,
  requestFilteredCourses,
  requestSingleCourse,
} from './courses.actions';
import {
  AppState,
  getAllCoursesSelector,
  getCourseSelector,
  getCoursesSelector,
  getErrorMessageSelector,
  isAllCoursesLoadingSelector,
  isSearchingStateSelector,
  isSingleCourseLoadingSelector,
} from './courses.selectors';

@Injectable({
  providedIn: 'root',
})
export class CoursesStateFacade {
  isAllCoursesLoading$: Observable<boolean> = this.store.pipe(
    select(isAllCoursesLoadingSelector)
  );

  isSingleCourseLoading$: Observable<boolean> = this.store.pipe(
    select(isSingleCourseLoadingSelector)
  );

  isSearchingState$: Observable<boolean> = this.store.pipe(
    select(isSearchingStateSelector)
  );

  allCourses$: Observable<ICourse[]> = this.store.pipe(
    select(getAllCoursesSelector)
  );

  courses$: Observable<ICourse[]> = this.store.pipe(select(getCoursesSelector));

  course$: Observable<ICourse> = this.store.pipe(select(getCourseSelector));

  errorMessage$: Observable<string> = this.store.pipe(
    select(getErrorMessageSelector)
  );

  constructor(private store: Store<AppState>) {}

  getAllCourses() {
    this.store.dispatch(requestAllCourses());
  }

  getSingleCourse(id: string) {
    this.store.dispatch(requestSingleCourse({ id }));
  }

  getFilteredCourses(search: string) {
    this.store.dispatch(requestFilteredCourses({ search }));
  }

  editCourse(id: string, course: ICourse) {
    const newCourse: ICourse = {
      ...course,
      authors: (course.authors as IAuthor[]).map((author) => author.id),
    };
    this.store.dispatch(requestEditCourse({ course: newCourse }));
  }

  createCourse(course: ICourse) {
    this.store.dispatch(requestCreateCourse({ course }));
  }

  deleteCourse(id: string) {
    this.store.dispatch(requestDeleteCourse({ id }));
  }
}
