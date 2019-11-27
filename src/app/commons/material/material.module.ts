import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatDialogModule } from "@angular/material";
import { SystemDialogComponent } from './system-dialog/system-dialog.component';

@NgModule({
  declarations: [SystemDialogComponent],
  imports: [CommonModule, MatDialogModule]
})
export class MaterialModule {}
