import { ICourse } from './../../shared/interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import {
  requestAllCoursesSuccess,
  requestAllCoursesFail,
  requestSingleCourseFail,
  requestFilteredCoursesSuccess,
  requestDeleteCourseFail,
  requestSingleCourseSuccess,
  requestEditCourseSuccess,
  requestEditCourseFail,
  requestCreateCourseSuccess,
  requestCreateCourseFail,
} from './courses.actions';

export interface ICoursesState {
  allCourses: ICourse[];
  courses: ICourse[];
  course: ICourse;
  isAllCoursesLoading: boolean;
  isSingleCourseLoading: boolean;
  isSearchState: boolean;
  errorMessage: string;
}

export const initialState: ICoursesState = {
  allCourses: [],
  courses: [],
  course: {
    id: '',
    title: '',
    description: '',
    duration: 0,
    creationDate: new Date(),
    authors: [],
  },
  isAllCoursesLoading: false,
  isSingleCourseLoading: false,
  isSearchState: false,
  errorMessage: '',
};

const reducer = createReducer(
  initialState,
  on(requestAllCoursesSuccess, (state, { courses }) => ({
    ...state,
    allCourses: courses,
  })),
  on(requestAllCoursesFail, (state, { errorMessage }) => ({
    ...state,
    errorMessage,
  })),
  on(requestCreateCourseSuccess, (state, { course }) => ({
    ...state,
    course,
  })),
  on(requestSingleCourseSuccess, (state, { course }) => ({
    ...state,
    course,
  })),
  on(requestSingleCourseFail, (state, { errorMessage }) => ({
    ...state,
    errorMessage,
  })),
  on(requestFilteredCoursesSuccess, (state, { courses }) => ({
    ...state,
    allCourses: courses,
  })),
  on(requestDeleteCourseFail, (state, { errorMessage }) => ({
    ...state,
    errorMessage,
  })),
  on(requestEditCourseSuccess, (state, { course }) => ({
    ...state,
    course,
  })),
  on(requestEditCourseFail, (state, { errorMessage }) => ({
    ...state,
    errorMessage,
  })),
  on(requestCreateCourseSuccess, (state, { course }) => ({
    ...state,
    courses: [...state.courses, course],
  })),
  on(requestCreateCourseFail, (state, { errorMessage }) => ({
    ...state,
    errorMessage,
  }))
);

export const coursesReducer = (state: ICoursesState, action: Action) =>
  reducer(state, action);
