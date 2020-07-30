import { createSelector } from '@ngrx/store';
import { IState } from './user.reducer';
import { AppState } from '../';

export const selectFeature = (state: AppState) => state.user;

export const getProfile = createSelector(
  selectFeature, //if not change, the...
  (user: IState) => user.profile //...output not recalculate
);

export const getName = createSelector(
  getProfile, //you can reuse
  (profile) => profile.name
);
