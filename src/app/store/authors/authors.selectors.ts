import { createSelector } from '@ngrx/store';
import { IAuthorsState } from './authors.reducer';

export interface AppState {
  authors: IAuthorsState;
}

export const selectAuthors = (state: AppState) => state.authors;

export const getAddedAuthor = createSelector(
  selectAuthors,
  (state: IAuthorsState) => state.addedAuthor
);

export const getAuthors = createSelector(
  selectAuthors,
  (state: IAuthorsState) => state.authors
);
