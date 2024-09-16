import { ActionReducerMap } from '@ngrx/store';
import { personReducer, PersonsState } from '../store/reducers/person.reducer';


export interface AppState {
  persons: PersonsState;
}

export const appReducers: ActionReducerMap<AppState> = {
  persons: personReducer, // Asignamos el reducer de personas
};
