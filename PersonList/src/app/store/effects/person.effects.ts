import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as PersonActions from '../actions/person.actions';
import { PersonService } from '../../service/person.service';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class PersonEffects {
  constructor(
    private actions$: Actions,
    private personService: PersonService
  ) {
    console.log('Actions:', this.actions$);
  }


  loadPersons$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PersonActions.loadPersons),
      mergeMap(() =>
        this.personService.getPersons().pipe(
          map(persons => PersonActions.loadPersonsSuccess({ persons })),
          catchError(error => of(PersonActions.loadPersonsFailure({ error })))
        )
      )
    )
  );

  addPerson$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PersonActions.addPerson),
      mergeMap(action =>
        this.personService.createPerson(action.person).pipe(
          map(response => PersonActions.addPersonSuccess({ person: response.data.createPerson })),
          catchError(error => of(PersonActions.addPersonFailure({ error })))
        )
      )
    )
  );

  updatePerson$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PersonActions.updatePerson),
      mergeMap(action =>
        this.personService.updatePerson(action.id, action.person).pipe(
          map(response => PersonActions.updatePersonSuccess({ person: response.data.updatePerson })),
          catchError(error => of(PersonActions.updatePersonFailure({ error })))
        )
      )
    )
  );

  deletePerson$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PersonActions.deletePerson),
      mergeMap(action =>
        this.personService.deletePerson(action.id).pipe(
          map(() => PersonActions.deletePersonSuccess({ id: action.id })),
          catchError(error => of(PersonActions.deletePersonFailure({ error })))
        )
      )
    )
  );


}
