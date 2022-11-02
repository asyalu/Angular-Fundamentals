import { IAuthor } from './../../shared/interfaces';
import { createAction, props } from '@ngrx/store';

export const requestAuthors = createAction('[Authors] requestAuthors');

export const requestAuthorsSuccess = createAction(
  '[Authors] requestAuthorsSuccess',
  props<{ authors: IAuthor[] }>()
);

export const requestAuthorsFail = createAction(
  '[Authors] requestAuthorsFail',
  props<{ error: string }>()
);

export const requestAddAuthor = createAction(
  '[Authors] requestAddAuthor',
  props<{ name: string }>()
);

export const requestAddAuthorSuccess = createAction(
  '[Authors] requestAddAuthorSuccess',
  props<{ name: string }>()
);

export const requestAddAuthorFail = createAction(
  '[Authors] requestAddAuthorFail',
  props<{ error: string }>()
);

export const resetAddedAuthor = createAction('resetAddedAuthor');
