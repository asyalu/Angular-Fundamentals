import { IUserState } from './user.reducer';
import { createSelector } from '@ngrx/store';

export const selectUser = (state: any) => state.user;

export const getNameSelector = createSelector(
  selectUser,
  (state: IUserState) => state.name
);

export const isAdminSelector = createSelector(
  selectUser,
  (state: IUserState) => state.isAdmin
);
