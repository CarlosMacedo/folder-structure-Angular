import { ActionReducerMap } from '@ngrx/store';
import * as UserActions from './user/user.actions';
import * as UserReducer from './user/user.reducer';
import * as UserSelectors from './user/user.selectors';
import * as UserEfects from './user/user.effects';

export { UserActions, UserReducer, UserSelectors };

export const userEfects: any[] = [UserEfects.UserEffects];

export interface AppState {
  //List of all states
  user: UserReducer.IState;
}

export const appReducer: ActionReducerMap<any, any> = {
  //List of all reducers
  user: UserReducer.userReducer,
};
