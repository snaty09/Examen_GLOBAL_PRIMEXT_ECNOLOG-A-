import { createAction, props } from '@ngrx/store';

export const loadPersons = createAction('[Person List] Load Persons');
export const loadPersonsSuccess = createAction('[Person List] Load Persons Success', props<{ persons: any[] }>());
export const loadPersonsFailure = createAction('[Person List] Load Persons Failure', props<{ error: any }>());

export const addPerson = createAction('[Person Form] Add Person', props<{ person: any }>());
export const addPersonSuccess = createAction('[Person Form] Add Person Success', props<{ person: any }>());
export const addPersonFailure = createAction('[Person Form] Add Person Failure', props<{ error: any }>());

export const updatePerson = createAction('[Person Form] Update Person', props<{ id: number, person: any }>());
export const updatePersonSuccess = createAction('[Person Form] Update Person Success', props<{ person: any }>());
export const updatePersonFailure = createAction('[Person Form] Update Person Failure', props<{ error: any }>());

export const deletePerson = createAction('[Person List] Delete Person', props<{ id: number }>());
export const deletePersonSuccess = createAction('[Person List] Delete Person Success', props<{ id: number }>());
export const deletePersonFailure = createAction('[Person List] Delete Person Failure', props<{ error: any }>());
