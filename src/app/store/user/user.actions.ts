import { Action } from '@ngrx/store';

export const LOGIN: string = '[User] Login';
export const LOGIN_START: string = '[User] Login start';
export const LOGOUT: string = '[User] Logout';

export class Login implements Action {
  readonly type = LOGIN;
  constructor(public payload: string) {}
}

export class LoginStart implements Action {
  readonly type = LOGIN_START;
  constructor(public payload: string) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
  constructor(public payload: string) {}
}

export type Types = Login | LoginStart | Logout;
