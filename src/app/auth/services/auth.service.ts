import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
import { IUser } from 'src/app/shared/interfaces';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthorized$$ = new BehaviorSubject<boolean>(false);
  public isAuthorized$: Observable<boolean> =
    this.isAuthorized$$.asObservable();

  user: IUser = {
    name: '',
    email: '',
    password: '',
  };

  constructor(
    private http: HttpClient,
    private storage: SessionStorageService
  ) {}

  login(user: IUser): Observable<Object> {
    return this.http
      .post<{ result: string }>('http://localhost:4000/login', user)
      .pipe(
        tap((res) => {
          this.user = user;
          this.storage.setToken(res.result);
          this.isAuthorized$$.next(true);
        }),
        catchError((error: HttpErrorResponse): Observable<any> => {
          alert(error.error.result);
          return throwError(() => error);
        })
      );
  }

  logout(): Observable<Object> {
    return this.http
      .delete<{ token: string }>('http://localhost:4000/logout', {
        headers: { Authorization: this.storage.getToken() || '' },
      })
      .pipe(
        tap(() => {
          this.storage.deleteToken('token');
          this.isAuthorized$$.next(false);
        })
      );
  }

  register(user: IUser): Observable<Object> {
    return this.http.post<{ token: string }>(
      'http://localhost:4000/register',
      user
    );
  }
}
