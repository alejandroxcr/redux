import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material";
import { SystemDialog } from "../interfaces/app-interface";
import { SystemDialogComponent } from "../commons/material/system-dialog/system-dialog.component";
import { Subject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AppService {
  private dialogAcceptSubject: Subject<boolean>;

  constructor(private dialog: MatDialog) {
    this.dialogAcceptSubject = new Subject<boolean>();
  }

  /**
   * It opens a new dialog box
   * @param data
   */
  openDialog(data: SystemDialog): Observable<any> {
    const { options } = data;

    return this.dialog
      .open(SystemDialogComponent, {
        width: options.width ? `${options.width}px` : "350px",
        height: options.height ? `${options.height}px` : "400px",
        data: data
      })
      .afterClosed();
  }
}
