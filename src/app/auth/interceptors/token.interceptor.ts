import { SessionStorageService } from './../services/session-storage.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private auth: AuthService,
    private router: Router,
    private session: SessionStorageService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.auth.isAuthorized$) {
      request = request.clone({
        setHeaders: {
          authorization: this.session.getToken() || '',
        },
      });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse): Observable<any> => {
        if (error.status == 401) {
          this.auth.logout();
          this.router.parseUrl('/login');
        }
        return throwError(() => error);
      })
    );
  }
}
