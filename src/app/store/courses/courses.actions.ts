import { ICourse } from './../../shared/interfaces';
import { createAction, props } from '@ngrx/store';

export const requestAllCourses = createAction('[Courses] requestAllCourses');

export const requestAllCoursesSuccess = createAction(
  '[Courses] requestAllCoursesSuccess',
  props<{ courses: ICourse[] }>()
);

export const requestAllCoursesFail = createAction(
  '[Courses] requestAllCoursesFail',
  props<{ errorMessage: string }>()
);

export const requestSingleCourse = createAction(
  '[Courses] requestSingleCourse',
  props<{ id: string }>()
);

export const requestSingleCourseSuccess = createAction(
  '[Courses] requestSingleCourseSuccess',
  props<{ course: ICourse }>()
);

export const requestSingleCourseFail = createAction(
  '[Courses] requestSingleCourseFail',
  props<{ errorMessage: string }>()
);

export const requestFilteredCourses = createAction(
  '[Courses] requestFilteredCourses',
  props<{ search: string }>()
);

export const requestFilteredCoursesSuccess = createAction(
  '[Courses] requestFilteredCoursesSuccess',
  props<{ courses: ICourse[] }>()
);

export const requestDeleteCourse = createAction(
  '[Courses] requestDeleteCourse',
  props<{ id: string }>()
);

export const requestDeleteCourseFail = createAction(
  '[Courses] requestDeleteCourseFail',
  props<{ errorMessage: string }>()
);

export const requestEditCourse = createAction(
  '[Courses] requestEditCourse',
  props<{ course: ICourse }>()
);

export const requestEditCourseSuccess = createAction(
  '[Courses] requestEditCourseSuccess',
  props<{ course: ICourse }>()
);

export const requestEditCourseFail = createAction(
  '[Courses] requestEditCourseFail',
  props<{ errorMessage: string }>()
);

export const requestCreateCourse = createAction(
  '[Courses] requestCreateCourse',
  props<{ course: ICourse }>()
);

export const requestCreateCourseSuccess = createAction(
  '[Courses] requestCreateCourseSuccess',
  props<{ course: ICourse }>()
);

export const requestCreateCourseFail = createAction(
  '[Courses] requestCreateCourseFail',
  props<{ errorMessage: string }>()
);
