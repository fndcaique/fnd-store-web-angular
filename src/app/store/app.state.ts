import { Action } from '@ngrx/store';

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

export class LoginAction implements Action {
  type = ActionTypes.login;
  constructor(public payload: string) { }
}

export class LogoutAction implements Action {
  type = ActionTypes.logout;
}

export const appReducer = (state = APP_INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ActionTypes.login:
      return { username: (action as LoginAction).payload }
    case ActionTypes.logout:
      return { username: '' }
    default:
      return state;
  }
}
