import { ActionReducerMap } from '@ngrx/store';
import { IState, Types, userReducer } from './user';

export interface AppState {
  //List of all states
  user: IState;
}

export const appReducer: ActionReducerMap<AppState, Types> = {
  //List of all reducers
  user: userReducer,
};

export { UserEffects } from './user';
