import { Action } from '@ngrx/store';

export const LOGIN: string = '[User] LOGIN';
export const LOGOUT: string = '[User] LOGOUT';

export class Login implements Action {
  readonly type = LOGIN;
  constructor(public payload: string) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
  constructor(public payload: string) {}
}

export type Types = Login | Logout;
