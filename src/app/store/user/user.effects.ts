import { Injectable } from '@angular/core';

import { Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of, EMPTY } from 'rxjs';

import * as UserActions from './user.actions';

@Injectable()
export class UserEffects {
  test$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.login),
      switchMap((data) => {
        return of(data).pipe(
          map((data) => {
            return UserActions.loginStart({ payload: 'Side effect! :)' });
          }),
          catchError((err) => {
            //...
            return EMPTY; /*  of( action ); //avoid kill actions$ with of() */
          })
        );
      })
    )
  );

  constructor(private actions$: Actions) {}
}
