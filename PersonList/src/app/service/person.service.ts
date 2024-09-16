import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GET_PERSONS, CREATE_PERSON, UPDATE_PERSON, DELETE_PERSON } from '../graphql/queries';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private apollo: Apollo) { }

  getPersons(): Observable<Person[]> {
    return this.apollo.watchQuery<any>({
      query: GET_PERSONS
    })
    .valueChanges
    .pipe(
      map(result => {
        if (!result.data || !result.data.getPersons) {
          throw new Error('No se obtuvieron personas.');
        }
        return result.data.getPersons;
      })
    );
  }

  createPerson(person: any): Observable<any> {
    return this.apollo.mutate({
      mutation: CREATE_PERSON,
      variables: {
        input: person
      }
    });
  }

  updatePerson(id: number, person: any): Observable<any> {
    return this.apollo.mutate({
      mutation: UPDATE_PERSON,
      variables: {
        id,
        input: person
      }
    });
  }

  deletePerson(id: number): Observable<any> {
    return this.apollo.mutate({
      mutation: DELETE_PERSON,
      variables: {
        id
      }
    });
  }
}
