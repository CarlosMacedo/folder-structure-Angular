import { IState } from './IState.interface';

import { initialState } from './initialState.store';
import * as UserActions from './user.actions';

export function userReducer(
  state: IState = initialState,
  action: UserActions.Types
) {
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
      return {
        ...state,
        profile: {
          ...state.profile,
          id: action.payload,
        },
      };
    default:
      return state;
  }
}
