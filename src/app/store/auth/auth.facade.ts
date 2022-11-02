import { IUser } from './../../shared/interfaces';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SessionStorageService } from 'src/app/auth/services/session-storage.service';
import { IAppState } from '..';
import {
  requestLogin,
  requestLoginSuccess,
  requestLogout,
  requestLogoutSuccess,
  requestRegister,
} from './auth.actions';
import {
  isUserAuthorizedSelector,
  getTokenSelector,
  getSpecificErrorMessageSelector,
} from './auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthStateFacade {
  isAuthorized$: Observable<boolean> = this.store.pipe(
    select(isUserAuthorizedSelector)
  );

  getToken$: Observable<string> = this.store.pipe(select(getTokenSelector));

  getLoginErrorMessage$: Observable<string> = this.store.pipe(
    select(getSpecificErrorMessageSelector)
  );

  getRegisterErrorMessage$: Observable<string> = this.store.pipe(
    select(getSpecificErrorMessageSelector)
  );

  constructor(
    private store: Store<IAppState>,
    private sessionStorageService: SessionStorageService
  ) {}

  login(body: IUser) {
    this.store.dispatch(requestLogin(body));
  }

  register(body: IUser) {
    this.store.dispatch(requestRegister(body));
  }

  logout() {
    this.store.dispatch(requestLogout());
  }

  closeSession() {
    this.store.dispatch(requestLogoutSuccess({ isAuthorized: false }));
  }

  setAuthorization(): void {
    const token = this.sessionStorageService.getToken();
    if (token) {
      this.store.dispatch(
        requestLoginSuccess({ token: token, isAuthorized: true })
      );
    }
  }
}
