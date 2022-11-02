import { Action, createReducer, on } from '@ngrx/store';
import {
  requestLoginSuccess,
  requestLogoutSuccess,
  requestRegisterSuccess,
} from './auth.actions';

const authFeatureKey = 'auth';

export interface IAuthState {
  isAuthorized: boolean;
  token: string;
  errorMessage: string;
}

export const initialState: IAuthState = {
  isAuthorized: false,
  token: '',
  errorMessage: '',
};

export const createAuthReducer = createReducer(
  initialState,
  on(requestLoginSuccess, (state, { token, isAuthorized }) => {
    return { ...state, token, isAuthorized };
  }),
  on(requestLogoutSuccess, (state, { isAuthorized }) => {
    return { ...state, token: '', isAuthorized };
  }),
  on(requestRegisterSuccess, (state) => {
    return { ...state };
  })
);

export const authReducer = (state: IAuthState, action: Action): IAuthState =>
  createAuthReducer(state, action);
