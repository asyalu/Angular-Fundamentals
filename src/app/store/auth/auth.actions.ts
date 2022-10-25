import { IUser } from './../../shared/interfaces';
import { createAction, props } from '@ngrx/store';

export const requestLogin = createAction(
  '[Login] requestLogin',
  props<{ email: string; password: string }>()
);

export const requestLoginSuccess = createAction(
  '[Login] requestLoginSuccess',
  props<{ token: string; isAuthorized: boolean }>()
);

export const requestLoginFail = createAction(
  '[Login] requestLoginFail',
  props<{ errorMessage: string }>()
);

export const requestRegister = createAction(
  '[Register] requestRegister',
  props<IUser>()
);

export const requestRegisterSuccess = createAction(
  '[Register] requestRegisterSuccess'
);

export const requestRegisterFail = createAction(
  '[Register] requestRegisterFail'
);

export const requestLogout = createAction('[Logout] requestLogout');

export const requestLogoutSuccess = createAction(
  '[Logout] requestLogoutSuccess',
  props<{ isAuthorized: boolean }>()
);
