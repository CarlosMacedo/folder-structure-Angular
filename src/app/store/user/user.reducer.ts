import { ActionReducerMap } from '@ngrx/store';
import * as UserActions from './user.actions';

const initialState: IState = {
  profile: {
    id: '',
    name: '',
    email: '',
  },
};

function userReducer(state: IState = initialState, action: UserActions.Types) {
  switch (action.type) {
    case UserActions.LOGIN:
      return {
        ...state,
        profile: {
          ...state.profile,
          id: action.payload,
        },
      };
    case UserActions.LOGOUT:
      console.log('Logoutt');
      return {
        ...state,
        profile: {
          ...state.profile,
          id: action.payload,
        },
      };
    case UserActions.LOGIN_START:
    default:
      return state;
  }
}

/*
 * Exports
 *
 */

export interface IState {
  profile: {
    id: string;
    name: string;
    email: string;
  };
}

export interface AppState {
  //List of all states
  user: IState;
}

export const appReducer: ActionReducerMap<AppState, UserActions.Types> = {
  //List of all reducers
  user: userReducer,
};
