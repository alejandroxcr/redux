
import { PeopleState } from './people.reducers';
import { IPerson } from './people.model';
import { createSelector, createReducer } from '@ngrx/store';



const isGender = (person: IPerson, gender: string) => person.gender === gender;
const selectName = (person: IPerson) => person.name;

export const selectAllPeople = (state: PeopleState) => state.people;
export const selectMen = (state: PeopleState) => state.people.filter( p => isGender(p, 'M'));


export const selectMenNames = createReducer(
    selectMen,
);


   