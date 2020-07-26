export { userReducer } from './user.reducer';
export { Types } from './user.actions';
export { UserEffects } from './user.effects';
export interface IState {
  profile: {
    id: string;
    name: string;
    email: string;
  };
}
