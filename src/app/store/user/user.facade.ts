import { requestCurrentUser } from './user.actions';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { isAdminSelector, getNameSelector } from './user.selectors';

@Injectable({
  providedIn: 'root',
})
export class UserStateFacade {
  isAdmin$ = this.store.select(isAdminSelector);
  name$ = this.store.select(getNameSelector);

  constructor(private store: Store) {}

  getCurrentUser(): void {
    this.store.dispatch(requestCurrentUser());
  }
}
