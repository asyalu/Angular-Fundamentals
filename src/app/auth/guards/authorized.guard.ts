import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorizedGuard implements CanLoad {
  isAuthorized: any;
  constructor(private auth: AuthService, private router: Router) {
    this.auth.isAuthorized$.subscribe((s) => (this.isAuthorized = s));
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
}
