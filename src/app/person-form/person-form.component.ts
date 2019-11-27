import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-person-form",
  templateUrl: "./person-form.component.html",
  styleUrls: ["./person-form.component.css"]
})
export class PersonFormComponent implements OnInit {
  private TAG_LOG = "PersonFormComponent";
  private TAG_ERROR = "PersonFormComponent-ERROR";
  private personForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.init();
  }
  /**
   * Initialize class memebers
   */
  private init(): void {
    try {
      this.personForm = new FormGroup({
        name: new FormControl("", Validators.required),
        mass: new FormControl("", Validators.required)
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
