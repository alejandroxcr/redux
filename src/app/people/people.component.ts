import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";

import { PeopleState, IPerson, addPeople, loadPeople } from "../store/people";
import { Observable } from "rxjs";
import {
  menHeightsAvg,
  menMassAvg,
  selectMen
} from "../store/people/people.selectors";
import { AppService } from "../services/app.service";
import { DialogType } from "../enums/app-enums";

@Component({
  selector: "app-people",
  templateUrl: "./people.component.html",
  styleUrls: ["./people.component.css"]
})
export class PeopleComponent implements OnInit {
  people$: Observable<IPerson[]>;
  heightMaleAvg$: Observable<number>;
  massMaleAvg$: Observable<number>;

  isLoading$: Observable<boolean>;

  constructor(
    private store: Store<{ peopleState: PeopleState }>,
    private appSvc: AppService
  ) {}

  ngOnInit() {
    this.init();
  }

  /**
   * Edit person
   * @param person
   */
  edit(person: IPerson): void {
    this.appSvc.openDialog({
      message: "",
      title: "Modify Person",
      type: DialogType.Edit,
      options: { height: 500, width: 400 }
    });
  }

  /**
   * Initialize class members
   */
  private init(): void {
    try {
      this.store.dispatch(loadPeople()); // Load remotely
      this.people$ = this.store.pipe(select(s => selectMen(s.peopleState)));
      this.isLoading$ = this.store.select(s => s.peopleState.loading);
      this.heightMaleAvg$ = this.store.select(s =>
        menHeightsAvg(s.peopleState)
      );

      this.massMaleAvg$ = this.store.select(s => menMassAvg(s.peopleState));
    } catch (err) {
      console.error("PEOPE-COMPONENT", `-e ${err}`);
    }
  }
}
