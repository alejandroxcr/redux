import { createReducer, on, State, Action } from "@ngrx/store";

import * as PeopleActions from "./people.actions";
import { IPerson } from "./people.model";

/**
 * State structure declared in reducer
 */
export interface PeopleState {
  people: IPerson[];
  selectedPerson: IPerson;
  loading: boolean;
}

const initialState: PeopleState = {
  people: [],
  selectedPerson: null,
  loading: false
};

const addPerson = ({ height, name, gender, mass }) => {
  return <IPerson>{ name, height, gender, id: "", mass };
};

const peopleReducer = createReducer(
  initialState,
  on(PeopleActions.addPeople, (state, { people }) => ({
    ...state,
    people: state.people.concat(people)
  })),
  on(PeopleActions.removePerson, (state, { person }) => ({
    ...state,
    people: state.people.filter(p => p.id !== person.id)
  })),
  on(PeopleActions.loadPeople, state => ({ ...state, loading: true })),
  on(PeopleActions.peopleSucceedLoad, (state, { data }) => ({
    ...state,
    loading: false,
    people: data.results.map((r: any) => addPerson(r))
  })),
  on(PeopleActions.loadPerson, (state, { person }) => ({
    ...state,
    selectedPerson: person
  }))
);

export function reducer(state: PeopleState | undefined, action: Action) {
  return peopleReducer(state, action);
}
