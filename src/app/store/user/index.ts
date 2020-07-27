export { userReducer } from './user.reducer';
export { Types } from './user.actions';
export { UserEffects } from './user.effects';
export * as UserActions from './user.actions';

export interface IState {
  profile: {
    id: string;
    name: string;
    email: string;
  };
}
