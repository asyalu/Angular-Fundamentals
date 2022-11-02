import { createSelector } from '@ngrx/store';
import { IAuthState } from './auth.reducer';

export const selectAuth = (state: any) => state.auth;

export const isUserAuthorizedSelector = createSelector(
  selectAuth,
  (state: IAuthState) => state.isAuthorized
);

export const getTokenSelector = createSelector(
  selectAuth,
  (state: IAuthState) => state.token
);

export const getSpecificErrorMessageSelector = createSelector(
  selectAuth,
  (state: IAuthState) => state.errorMessage
);
