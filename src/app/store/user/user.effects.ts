import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UserService } from 'src/app/user/user.service';
import {
  requestCurrentUser,
  requestCurrentUserSuccess,
  requestCurrentUserFail,
} from './user.actions';

@Injectable()
export class UserEffects {
  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestCurrentUser),
      mergeMap(() =>
        this.userService.getUser().pipe(
          map((response) =>
            requestCurrentUserSuccess({
              user: response.result,
              name: response.result.name,
              isAdmin: response.result.role === 'admin',
            })
          ),
          catchError(async () => requestCurrentUserFail())
        )
      )
    )
  );

  constructor(private actions$: Actions, private userService: UserService) {}
}
