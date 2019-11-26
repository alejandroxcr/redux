import { Component, OnInit } from '@angular/core';
import { Store, select  } from '@ngrx/store';

import { PeopleState, IPerson, addPeople, loadPeople } from '../store/people';
import { Observable } from 'rxjs';
import { menAvg } from '../store/people/people.selectors';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people$: Observable<IPerson[]>;
  heightMaleAvg$: Observable<number>;

  isLoading$: Observable<boolean>;


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

      this.store.dispatch(loadPeople()); // Load remotely

      this.people$ = this.store.pipe(select(s => s.peopleState.people));
      this.heightMaleAvg$ = this.store.select(s => menAvg(s.peopleState));
      this.isLoading$ = this.store.select( s => s.peopleState.loading);

    } catch (err) {
      console.error('PEOPE-COMPONENT', `-e ${err}`);
    }
  }

}
