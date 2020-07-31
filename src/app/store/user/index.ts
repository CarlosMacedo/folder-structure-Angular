import * as UserActions from './user.actions';
import * as UserReducer from './user.reducer';
import * as UserSelectors from './user.selectors';
import * as UserEfects from './user.effects';
export { UserActions, UserReducer, UserSelectors };
export const userEfects: any[] = [UserEfects.UserEffects];
