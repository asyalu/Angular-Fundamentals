import { Injectable, OnDestroy } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorizedGuard implements CanLoad, OnDestroy {
  isAuthorized!: boolean;
  authSub: Subscription;

  constructor(private auth: AuthService, private router: Router) {
    this.authSub = this.auth.isAuthorized$.subscribe(
      (s) => (this.isAuthorized = s)
    );
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.isAuthorized) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  ngOnDestroy(): void {
    this.authSub.unsubscribe();
  }
}
