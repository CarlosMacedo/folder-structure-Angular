import { createSelector } from '@ngrx/store';
import { AppState } from '../';
import { RouterStateUrl } from './CustomSerializer.class';

const getRouterState = (state: AppState) => state.router;

export const getRouteState = createSelector(
  getRouterState,
  (state: RouterStateUrl) => state
);
