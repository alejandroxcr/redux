import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { reducer } from '../store/people';
import { PeopleComponent } from './people.component';



@NgModule({
  declarations: [ PeopleComponent ],
  imports: [
    CommonModule,
    StoreModule.forFeature('peopleState', reducer)
  ],
  exports: [ PeopleComponent ]
})
export class PeopleModule { }
