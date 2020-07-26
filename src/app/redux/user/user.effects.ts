import { switchMap, catchError, map } from 'rxjs/operators';
import { Actions, ofType, Effect } from '@ngrx/effects';
import * as UserActions from './user.actions';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
  //@Effect()
  userLogin = this.actions$
    .pipe
    // ofType(UserActions.LOGIN_START),
    // switchMap((action: UserActions.LoginStart) => {
    //   return 'A string as an example of an asynchronous return from a JSON'.pipe(
    //     catchError((error) => {
    //       of();
    //       return error;
    //     }),
    //     map((resData) => {
    //       return new UserActions.Login('a return example');
    //     })
    //   );
    // })
    ();

  //it's good practice mark observables with $
  constructor(private actions$: Actions) {}
}
