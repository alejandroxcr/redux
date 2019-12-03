import { Injectable } from "@angular/core";

import { createEffect, ofType, Actions } from "@ngrx/effects";
import { map, mergeMap, catchError } from "rxjs/operators";

import { RemoteService } from "src/app/services/remote.service";
import { EMPTY } from "rxjs";
import { loadPeople, peopleSucceedLoad, loadShips } from "./people.actions";
import { environment } from "src/environments/environment";

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

  loadStarships$ = createEffect(() =>
    this.actions.pipe(
      ofType(loadShips),
      mergeMap(action =>
        this.remote.getStarships(action.id).pipe(
          map(data => ({ type: peopleSucceedLoad.type, data })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
