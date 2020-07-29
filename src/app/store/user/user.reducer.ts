import { createReducer, on, Action } from '@ngrx/store';
import * as UserActions from './user.actions';

export interface IState {
  profile: {
    id: string;
    name: string;
    email: string;
  };
}

const initialState: IState = {
  profile: {
    id: '',
    name: '',
    email: '',
  },
};

const _userReducer = createReducer(
  initialState,
  on(UserActions.login, (state, { payload }) => {
    return {
      ...state,
      profile: {
        ...state.profile,
        id: payload,
      },
    };
  }),
  on(UserActions.loginStart, (state, { payload }) => {
    return {
      ...state,
      profile: {
        ...state.profile,
        name: payload,
      },
    };
  }),
  on(UserActions.logout, (state, { payload }) => {
    return {
      ...state,
      profile: {
        ...state.profile,
        email: payload,
      },
    };
  })
);

export function userReducer(state: IState, action: Action) {
  return _userReducer(state, action);
}
