import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAuthor } from 'src/app/shared/interfaces';
import { requestAddAuthor, requestAuthors } from './authors.actions';
import { AppState, getAddedAuthor, getAuthors } from './authors.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthorsStateFacade {
  addedAuthor$: Observable<IAuthor> = this.store.pipe(select(getAddedAuthor));

  authors$: Observable<IAuthor[]> = this.store.pipe(select(getAuthors));

  constructor(private store: Store<AppState>) {}

  getAuthors() {
    this.store.dispatch(requestAuthors());
  }

  addAuthor(name: string) {
    this.store.dispatch(requestAddAuthor({ name }));
  }
}
