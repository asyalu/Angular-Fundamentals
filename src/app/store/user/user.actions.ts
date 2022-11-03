import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/shared/interfaces';

export const requestCurrentUser = createAction('[User] requestCurrentUser');

export const requestCurrentUserSuccess = createAction(
  '[User] requestCurrentUserSuccess',
  props<{ user: IUser; isAdmin: boolean; name: string }>()
);

export const requestCurrentUserFail = createAction('requestCurrentUserFail');
