import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatDialogModule, MatFormFieldModule } from "@angular/material";
import { SystemDialogComponent } from "./system-dialog/system-dialog.component";
import { PeopleModule } from "src/app/people/people.module";

@NgModule({
  declarations: [SystemDialogComponent],
  entryComponents: [SystemDialogComponent],
  imports: [CommonModule, MatDialogModule, MatFormFieldModule, PeopleModule]
})
export class MaterialModule {}
