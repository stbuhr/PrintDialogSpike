import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Signal,
  ViewChild,
  computed,
  signal,
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
export class PrintDialogComponent implements AfterViewInit {
  @ViewChild(PrintDialogAtlasComponent) atlas:
    | PrintDialogAtlasComponent
    | undefined;
  @ViewChild(PrintDialogTeamroleComponent) teamrole:
    | PrintDialogTeamroleComponent
    | undefined;
  @ViewChild(PrintDialogDevelopmentComponent) development:
    | PrintDialogDevelopmentComponent
    | undefined;
  canBePrinted: Signal<boolean> = signal(false);

  constructor(public dialog: MatDialog) {}

  ngAfterViewInit() {
    this.canBePrinted = computed(
      () =>
        (this.atlas?.isSelected() ||
          this.teamrole?.isSelected() ||
          this.development?.isSelected()) ??
        false
    );
  }

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
