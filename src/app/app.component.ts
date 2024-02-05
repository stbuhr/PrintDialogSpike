import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'; // Import the 'MatDialog' class
import { PrintDialogComponent } from './print-dialog/print-dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}

  openPrintDialog() {
    const dialogRef = this.dialog.open(PrintDialogComponent, {
      maxHeight: '100%',
      maxWidth: '100%',
    });
  }
}
