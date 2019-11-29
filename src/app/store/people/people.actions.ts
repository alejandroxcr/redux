import { createAction, props } from "@ngrx/store";

import { IPerson } from "./people.model";

const actionkey = "[People]";

export const addPeople = createAction(
  `${actionkey} Add Person`,
  props<{ people: Array<IPerson> }>()
);
export const removePerson = createAction(
  `${actionkey} RemovePerson`,
  props<{ person: IPerson }>()
);
export const loadPeople = createAction(`${actionkey} Load People`);
export const peopleSucceedLoad = createAction(
  `${actionkey} Succeed Load`,
  props<{ data: any }>()
);

export const loadPerson = createAction(
  `${actionkey} Load Person`,
  props<{ person: IPerson }>()
);

export const updatePerson = createAction(
  `${actionkey} Update Person`,
  props<{ person: IPerson}>()
);
