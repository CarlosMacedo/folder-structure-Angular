import { ActionReducerMap } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { UserReducer } from './user';
import { RouterStateUrl } from './router';

export interface AppState {
  //List of all states
  user: UserReducer.IState;
  router: RouterStateUrl;
}
export const appReducer: ActionReducerMap<any, any> = {
  //List of all reducers
  user: UserReducer.userReducer,
  router: fromRouter.routerReducer,
};
