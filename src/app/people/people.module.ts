import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";

import { reducer } from "../store/people";
import { PeopleComponent } from "./people.component";
import { PeopleEffects } from "../store/people/people.effects";
import { EffectsModule } from "@ngrx/effects";

@NgModule({
  declarations: [PeopleComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature("peopleState", reducer),
    EffectsModule.forFeature([PeopleEffects])
  ],
  exports: [PeopleComponent]
})
export class PeopleModule {}
