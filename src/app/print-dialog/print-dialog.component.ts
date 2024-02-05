import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import { PrintDialogAtlasComponent } from '../print-dialog-atlas/print-dialog-atlas.component';
import { PrintDialogTeamroleComponent } from '../print-dialog-teamrole/print-dialog-teamrole.component';
import { PrintDialogDevelopmentComponent } from '../print-dialog-development/print-dialog-development.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-print-dialog',
  standalone: true,
  templateUrl: './print-dialog.component.html',
  styleUrl: './print-dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    PrintDialogAtlasComponent,
    PrintDialogTeamroleComponent,
    PrintDialogDevelopmentComponent,
  ],
})
export class PrintDialogComponent {
  @ViewChild(PrintDialogAtlasComponent) atlas:
    | PrintDialogAtlasComponent
    | undefined;
  @ViewChild(PrintDialogTeamroleComponent) teamrole:
    | PrintDialogTeamroleComponent
    | undefined;
  @ViewChild(PrintDialogDevelopmentComponent) development:
    | PrintDialogDevelopmentComponent
    | undefined;

  constructor(public dialog: MatDialog) {}

  selectAll() {
    this.atlas?.selectAll();
    this.teamrole?.selectAll();
    this.development?.selectAll();
  }
  print() {
    this.dialog.closeAll();
  }
  close() {
    this.dialog.closeAll();
  }
}
