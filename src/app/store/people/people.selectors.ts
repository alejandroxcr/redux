
import { PeopleState } from './people.reducers';
import { IPerson } from './people.model';
import { createSelector } from '@ngrx/store';


const selectPeople = (state: PeopleState) => state.people;
const men = (people: IPerson[]) => people.filter(p => p.gender === 'male');
const selectHeights = (people: IPerson[]) => people.map( p => +p.height);
const sum = (people: number[]) => people.reduce( (prev: number, current: number) => current += prev )

const countMen = (s: PeopleState) => men(selectPeople(s)).length;
const avg = (s: PeopleState) => sum(selectHeights(men(selectPeople(s)))) / countMen(s);

// Heights average
export const menAvg = createSelector( avg, (s: number) => s );




