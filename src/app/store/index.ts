import { ICourse } from './../shared/interfaces';
import { AuthEffects } from './auth/auth.effects';
import { authReducer, IAuthState } from './auth/auth.reducer';
import { AuthorsEffects } from './authors/authors.effects';
import { authorsReducer, IAuthorsState } from './authors/authors.reducer';
import { CoursesEffects } from './courses/courses.effects';
import { coursesReducer } from './courses/courses.reducers';
import { UserEffects } from './user/user.effects';
import { IUserState, userReducer } from './user/user.reducer';

export interface IAppState {
  user: IUserState;
  authors: IAuthorsState;
  auth: IAuthState;
  courses: ICourse;
}

export const reducers: any = {
  user: userReducer,
  auth: authReducer,
  authors: authorsReducer,
  courses: coursesReducer,
};

export const effects = [
  UserEffects,
  AuthEffects,
  AuthorsEffects,
  CoursesEffects,
];
