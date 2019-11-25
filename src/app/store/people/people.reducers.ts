import { createReducer, on, State, Action } from '@ngrx/store';

import * as PeopleActions from './people.actions';
import { IPerson } from './people.model';


/**
 * State structure declared in reducer 
 */
export interface PeopleState { 
    people: IPerson [];
}

const initialState: PeopleState = {
    people: []
}

const addPerson = (data: any) =>  <IPerson>{ name: data.name, age: '', gender: '', id: ''};

const peopleReducer = createReducer(
    initialState,
    on(PeopleActions.addPeople, (state, { people }) => ({...state,  people: state.people.concat(people)} )),
    on(PeopleActions.removePerson, (state, { person }) => ({...state, people: state.people.filter( p => p.id !== person.id )})),
    on(PeopleActions.loadPeople),
    on(PeopleActions.peopleSucceedLoad, (state, {data}) => ({...state, people: data.results.map( (r: any) => addPerson(r)) }))
);

export function reducer( state: PeopleState | undefined, action: Action) {
    return peopleReducer(state, action);
}