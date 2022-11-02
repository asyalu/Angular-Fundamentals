import { createSelector } from '@ngrx/store';
import { ICoursesState } from './courses.reducers';

export interface AppState {
  courses: ICoursesState;
}

export const selectCourses = (state: AppState) => state.courses;

export const isAllCoursesLoadingSelector = createSelector(
  selectCourses,
  (state: ICoursesState) => state.isAllCoursesLoading
);

export const isSearchingStateSelector = createSelector(
  selectCourses,
  (state: ICoursesState) => state.isSearchState
);

export const isSingleCourseLoadingSelector = createSelector(
  selectCourses,
  (state: ICoursesState) => state.isSingleCourseLoading
);

export const getCoursesSelector = createSelector(
  selectCourses,
  (state: ICoursesState) => state.courses
);

export const getAllCoursesSelector = createSelector(
  selectCourses,
  (state: ICoursesState) => state.allCourses
);

export const getCourseSelector = createSelector(
  selectCourses,
  (state: ICoursesState) => state.course
);

export const getErrorMessageSelector = createSelector(
  selectCourses,
  (state: ICoursesState) => state.errorMessage
);
