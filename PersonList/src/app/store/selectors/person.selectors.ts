import { createSelector, createFeatureSelector } from '@ngrx/store';
import { PersonsState } from '../reducers/person.reducer';


export const selectPersonsState = createFeatureSelector<PersonsState>('persons');

export const selectAllPersons = createSelector(
  selectPersonsState,
  (state: PersonsState) => state.persons
);

export const selectLoading = createSelector(
  selectPersonsState,
  (state: PersonsState) => state.loading
);

export const selectError = createSelector(
  selectPersonsState,
  (state: PersonsState) => state.error
);
