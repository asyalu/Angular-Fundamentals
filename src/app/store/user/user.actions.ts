import { createAction, props } from '@ngrx/store';

export const requestCurrentUser = createAction('[User] requestCurrentUser');

export const requestCurrentUserSuccess = createAction(
  '[User] requestCurrentUserSuccess',
  props<{ user: any }>()
);

export const requestCurrentUserFail = createAction('requestCurrentUserFail');
