import { createReducer, on } from '@ngrx/store';
import * as PersonActions from '../actions/person.actions';

export interface PersonsState {
  persons: any[];
  loading: boolean;
  error: any;
}

export const initialState: PersonsState = {
  persons: [],
  loading: false,
  error: null
};

export const personReducer = createReducer(
  initialState,
  // Cargar Personas
  on(PersonActions.loadPersons, state => ({
    ...state,
    loading: true
  })),
  on(PersonActions.loadPersonsSuccess, (state, { persons }) => ({
    ...state,
    persons: persons,
    loading: false
  })),
  on(PersonActions.loadPersonsFailure, (state, { error }) => ({
    ...state,
    error: error,
    loading: false
  })),

  // Agregar Persona
  on(PersonActions.addPerson, state => ({
    ...state,
    loading: true
  })),
  on(PersonActions.addPersonSuccess, (state, { person }) => ({
    ...state,
    persons: [...state.persons, person],
    loading: false
  })),
  on(PersonActions.addPersonFailure, (state, { error }) => ({
    ...state,
    error: error,
    loading: false
  })),

  // Actualizar Persona
  on(PersonActions.updatePerson, state => ({
    ...state,
    loading: true
  })),
  on(PersonActions.updatePersonSuccess, (state, { person }) => ({
    ...state,
    persons: state.persons.map(p => p.PersonID === person.PersonID ? person : p),
    loading: false
  })),
  on(PersonActions.updatePersonFailure, (state, { error }) => ({
    ...state,
    error: error,
    loading: false
  })),

  // Eliminar Persona
  on(PersonActions.deletePerson, state => ({
    ...state,
    loading: true
  })),
  on(PersonActions.deletePersonSuccess, (state, { id }) => ({
    ...state,
    persons: state.persons.filter(p => p.PersonID !== id),
    loading: false
  })),
  on(PersonActions.deletePersonFailure, (state, { error }) => ({
    ...state,
    error: error,
    loading: false
  }))
);
