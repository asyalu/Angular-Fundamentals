import { Action, createReducer, on } from '@ngrx/store';
import * as UserAction from './user.actions';

export const userFeatureKey = 'user';

export interface IUserState {
  name: string;
  isAdmin: boolean;
}

export const initialState: IUserState = {
  name: '',
  isAdmin: false,
};

export const createUserReducer = createReducer(
  initialState,
  on(
    UserAction.requestCurrentUserSuccess,
    (state, { user, name, isAdmin }) => ({
      ...state,
      user,
      name,
      isAdmin,
    })
  )
);

export const userReducer = (state: IUserState, action: Action) =>
  createUserReducer(state, action);
