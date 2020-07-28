import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

import * as UserActions from './user.actions';

@Injectable()
export class UserEffects {
  @Effect(/* {dispatch: false} //if not dispatch any action*/)
  userLogin = this.actions$.pipe(
    ofType<UserActions.LoginStart | UserActions.Logout>(
      UserActions.LOGIN_START
      // UserActions.AnotherAction
    ),
    switchMap((userData: UserActions.LoginStart) => {
      const response = userData.payload + 'example';
      return of(response) //some async code
        .pipe(
          map((data) => {
            //...
            return new UserActions.Login('data.email'); //return new action
          }),
          catchError((err) => {
            //...
            return of(/* new UserActions.LoginFail(err) */); //avoid kill actions$ with of()
          })
        );
    })
  );

  //it's good practice mark observables with $
  constructor(private actions$: Actions) {}
}
