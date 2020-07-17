import { ActionReducerMap } from '@ngrx/store';
import { Types } from './user/user.actions';
import { IState } from './user/IState.interface';
import { userReducer } from './user/user.reducer';

export interface AppState {
  user: IState;
}

export const appReducer: ActionReducerMap<AppState, Types> = {
  //List of reducers
  user: userReducer,
};
