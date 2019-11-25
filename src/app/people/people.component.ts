import { Component, OnInit } from '@angular/core';
import { Store, select  } from '@ngrx/store';

import { PeopleState, IPerson, addPeople } from '../store/people';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people$: Observable<IPerson[]>;

  constructor(private store: Store<{peopleState: PeopleState}>) {
  }

  ngOnInit() {
    this.init();
  }

  /**
   * Initialize class members
   */
  private init(): void { 
    try {

      this.people$ = this.store.pipe(select(s => s.peopleState.people));

    } catch (err) {
      console.error('PEOPE-COMPONENT', `-e ${err}`);
    }
  }

  /**
   * Add person
   */
  add(): void {

    const person: IPerson = {
      age: '1',
      gender: 'M',
      id: '01',
      name: 'Default'
    };

    this.store.dispatch(addPeople({ people: [person]} ));

  }

}
