import { Action } from '@ngrx/store';

export const LOGIN: string = '[User] LOGIN';
export const LOGIN_START: string = '[User] LOGIN_START';
export const LOGOUT: string = '[User] LOGOUT';

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

export type Types = Login | Logout;
