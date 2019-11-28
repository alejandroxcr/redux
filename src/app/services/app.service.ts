import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material";
import { SystemDialog } from "../interfaces/app-interface";
import { SystemDialogComponent } from "../commons/material/system-dialog/system-dialog.component";

@Injectable({
  providedIn: "root"
})
export class AppService {
  constructor(private dialog: MatDialog) {}

  /**
   * It opens a new dialog box
   * @param data
   */
  openDialog(data: SystemDialog): void {
    const { options } = data;
    this.dialog.open(SystemDialogComponent, {
      width: options.width ? `${options.width}px` : "350px",
      height: options.height ? `${options.height}px` : "400px",
      data: data
    });
  }
}
