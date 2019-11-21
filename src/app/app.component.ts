import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { PeopleState, addPeople, IPerson } from './store/people';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  people$: Observable<IPerson[]>;
  
  
  constructor(private store: Store<PeopleState>) { }

  ngOnInit() { 
    //this.people$ = this.store.select(p => {console.log('p:', JSON.stringify(p.peopleState.people)); return p.peopleState.people });
    this.people$ = this.store.select('people');
  }

  addPeople(): void { 
    this.store.dispatch(addPeople({people: [
      {
       name: 'default',
       age: '5',
       id: '22',
       gender: 'M' 
      }
    ]}))
  }

}
