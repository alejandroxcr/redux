import { createAction, props } from '@ngrx/store';

import { IPerson } from  './people.model';


const actionkey = '[People]';

export const addPeople = createAction(`${actionkey} Add Person`,props<{people: Array<IPerson>}>() );
export const removePerson = createAction(`${actionkey} RemovePerson`, props<{person: IPerson }>());
export const getName = createAction(`${actionkey}`);