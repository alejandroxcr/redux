import { Injectable } from '@angular/core';

import { createEffect, ofType, Actions } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { RemoteService } from 'src/app/services/remote.service';
import { EMPTY } from 'rxjs';
import { loadPeople, peopleSucceedLoad } from './people.actions';

@Injectable()
export class PeopleEffects {
  constructor(private actions: Actions, private remote: RemoteService) {}

  loadPeople$ = createEffect(() =>
    this.actions.pipe(
      ofType(loadPeople),
      mergeMap(() =>
        this.remote.getPeople().pipe(
          map(data => ({ type: peopleSucceedLoad.type, data })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
