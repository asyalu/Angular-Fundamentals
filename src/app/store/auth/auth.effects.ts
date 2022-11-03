import { Router } from '@angular/router';
import { SessionStorageService } from './../../auth/services/session-storage.service';
import { AuthService } from '../../auth/services/auth.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import {
  requestLogin,
  requestLoginSuccess,
  requestLoginFail,
  requestLogout,
  requestLogoutSuccess,
  requestRegister,
  requestRegisterSuccess,
} from './auth.actions';
import { IUser } from 'src/app/shared/interfaces';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private sessionStorageService: SessionStorageService,
    private router: Router
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestLogin),
      mergeMap((payload: any) => {
        console.log(payload);
        return this.authService.login(payload).pipe(
          tap((auth: any) => this.sessionStorageService.setToken(auth.result)),
          map((auth: any) =>
            requestLoginSuccess({
              token: auth.result,
              isAuthorized: auth.successful,
            })
          ),
          catchError(async (error) => requestLoginFail(error))
        );
      })
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestLogout),
      mergeMap(() => {
        return this.authService.logout().pipe(
          tap(() => this.sessionStorageService.setToken('')),
          map(() => {
            this.router.navigate(['/login']);
            return requestLogoutSuccess({ isAuthorized: false });
          })
        );
      })
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestRegister),
      mergeMap((user: IUser) =>
        this.authService.register(user).pipe(
          map(() => {
            this.router.navigate(['/login']);
            return requestRegisterSuccess();
          })
        )
      )
    )
  );
}
