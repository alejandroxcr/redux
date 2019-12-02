import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { SystemDialog } from "src/app/interfaces/app-interface";
import { DialogType } from "src/app/enums/app-enums";

@Component({
  selector: "app-system-dialog",
  templateUrl: "./system-dialog.component.html",
  styleUrls: ["./system-dialog.component.css"]
})
export class SystemDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: SystemDialog
  ) {}

  ngOnInit() {}

  /**
   * Close dialog
   */
  close(): void {
    this.dialogRef.close(false);
  }

  /**
   * Accept
   */
  accept(): void {
    this.dialogRef.close(true);
  }

  get DialogType() {
    return DialogType;
  } // To use enum reference from template
}
