import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";

import { reducer } from "../store/people";
import { PeopleComponent } from "./people.component";
import { PeopleEffects } from "../store/people/people.effects";
import { EffectsModule } from "@ngrx/effects";
import { PersonFormComponent } from "../person-form/person-form.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [PeopleComponent, PersonFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature("peopleState", reducer),
    EffectsModule.forFeature([PeopleEffects])
  ],
  exports: [PeopleComponent, PersonFormComponent]
})
export class PeopleModule {}
