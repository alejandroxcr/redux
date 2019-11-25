
import { PeopleState } from './people.reducers';
import { IPerson } from './people.model';
import { createSelector } from '@ngrx/store';



const selectAllPeople = (state: PeopleState) => state.people;
const selectMen = (people: IPerson[]) => people.filter( p => p.gender === 'male');
const selectNames = (people: IPerson[]) => people.map(p => p.name);
const genderNames = (state: PeopleState) => selectNames(selectMen(selectAllPeople(state)));


/**
 * Select men names
 */
export const selectMenNames =  createSelector( 
    genderNames,
    (names: string[]) => {
        if (names) {
            return names
        } else {
            return ['empty'];
        }
    }
);



