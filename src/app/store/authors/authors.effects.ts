import { IAuthor } from './../../shared/interfaces';
import { AuthorsService } from './../../services/authors.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import {
  requestAuthors,
  requestAuthorsSuccess,
  requestAuthorsFail,
  requestAddAuthor,
  requestAddAuthorSuccess,
  requestAddAuthorFail,
} from './authors.actions';

@Injectable()
export class AuthorsEffects {
  getAuthors$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestAuthors),
      mergeMap(() =>
        this.authorService.getAll().pipe(
          map((response: any) => response.result),
          map((authors: IAuthor[]) =>
            requestAuthorsSuccess({ authors: authors })
          ),
          catchError(async (error) => requestAuthorsFail(error))
        )
      )
    )
  );

  addAuthor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestAddAuthor),
      mergeMap((author) =>
        this.authorService.addAuthor(author.name).pipe(
          map((response) => response.result),
          map((author) => requestAddAuthorSuccess(author)),
          catchError(async (error) => requestAddAuthorFail(error))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authorService: AuthorsService
  ) {}
}
