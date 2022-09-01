import { createAction, createReducer, on, props } from '@ngrx/store';

export interface AppState {
  username: string;
}

export const APP_INITIAL_STATE: AppState = {
  username: '',
}

enum ActionTypes {
  login = '@user/login',
  logout = '@user/logout',
}

export const loginAction = createAction(
  ActionTypes.login,
  props<{ username: string }>(),
);

export const logoutAction = createAction(ActionTypes.logout);

export const appReducer = createReducer(
  APP_INITIAL_STATE,
  on(loginAction, (_state, { username }) => ({ username }))
);
