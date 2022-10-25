import { IAuthor } from './../../shared/interfaces';
import { createReducer, on, Action } from '@ngrx/store';
import {
  requestAuthorsSuccess,
  requestAuthorsFail,
  requestAddAuthorSuccess,
  requestAddAuthorFail,
  resetAddedAuthor,
} from './authors.actions';

const authorsFeatureKey = 'authors';

export interface IAuthorsState {
  authors: IAuthor[];
  addedAuthor: IAuthor;
}

export const initialState: IAuthorsState = {
  authors: [],
  addedAuthor: { name: '', id: '' },
};

const reducer = createReducer(
  initialState,
  on(requestAuthorsSuccess, (state, { authors }) => ({
    ...state,
    authors,
  })),
  on(requestAuthorsFail, (state) => ({ ...state })),
  on(requestAddAuthorSuccess, (state) => ({ ...state })),
  on(requestAddAuthorFail, (state) => ({ ...state })),
  on(resetAddedAuthor, (state) => ({ ...state }))
);

export const authorsReducer = (state: IAuthorsState, action: Action) =>
  reducer(state, action);
