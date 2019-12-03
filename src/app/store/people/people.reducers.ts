import { createReducer, on, State, Action } from "@ngrx/store";

import * as PeopleActions from "./people.actions";
import { IPerson } from "./people.model";
import { Guid } from "guid-typescript";

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

const addPerson = ({ height, name, gender, mass, starships }) => {
  return {
    name,
    height,
    gender,
    id: Guid.create(),
    mass,
    starships
  } as IPerson;
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
  })),
  on(PeopleActions.updatePerson, (state, { person }) => ({
    ...state,
    people: state.people.map((p: IPerson) => {
      if (p.id === person.id) {
        return person;
      } else {
        return p;
      }
    })
  })),
  on(PeopleActions.deletePerson, (state, { person }) => ({
    ...state,
    people: state.people.filter((p: IPerson) => p.id !== person.id)
  }))
);

export function reducer(state: PeopleState | undefined, action: Action) {
  return peopleReducer(state, action);
}
