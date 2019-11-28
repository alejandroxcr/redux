import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs";

import { IPerson, PeopleState } from "../store/people";

@Component({
  selector: "app-person-form",
  templateUrl: "./person-form.component.html",
  styleUrls: ["./person-form.component.css"]
})
export class PersonFormComponent implements OnInit {
  private TAG_LOG = "PersonFormComponent";
  private TAG_ERROR = "PersonFormComponent-ERROR";
  private personForm: FormGroup;

  selectedPerson$: Observable<IPerson>;

  constructor(private store: Store<{ peopleState: PeopleState }>) {}

  ngOnInit() {
    this.init();
  }

  private init(): void {
    try {
      this.selectedPerson$ = this.store.select(
        s => s.peopleState.selectedPerson
      );
      this.initForm();
    } catch (err) {
      console.error(this.TAG_ERROR, `-e ${err}`);
    }
  }
  /**
   * Initialize class memebers
   */
  private initForm(): void {
    try {
      this.personForm = new FormGroup({
        name: new FormControl("", Validators.required),
        mass: new FormControl("", Validators.required),
        height: new FormControl("", Validators.required)
      });
    } catch (err) {
      console.log(this.TAG_ERROR, `${err}`);
    }
  }

  /**
   * Getters and setters
   */
  get getPersonForm(): FormGroup {
    return this.personForm;
  }
}
