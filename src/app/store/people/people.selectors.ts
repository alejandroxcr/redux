
import { PeopleState } from './people.reducers';
import { IPerson } from './people.model';
import { createSelector } from '@ngrx/store';



const isGender = (person: IPerson, gender: string) => person.gender === gender;
const selectNames = (people: IPerson[]) => people.map( p => p.name);
const selectMen = (people: IPerson[]) => people.filter( p => p.gender === 'M');
const selectAllPeople = (state: PeopleState) => state.people;



export const selectMenNames = createSelector(
    selectAllPeople,
    selectNames
);


   