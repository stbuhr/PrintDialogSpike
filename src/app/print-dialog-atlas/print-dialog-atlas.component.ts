import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { IPrintDialogSection } from '../IPrintDialogSection';

@Component({
  selector: 'app-print-dialog-atlas',
  standalone: true,
  imports: [CommonModule, MatRadioModule, FormsModule],
  templateUrl: './print-dialog-atlas.component.html',
  styleUrl: './print-dialog-atlas.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrintDialogAtlasComponent implements IPrintDialogSection {
  isSelected = signal(true);
  condition = signal('both');

  selectAll() {
    this.isSelected.set(true);
    this.condition.set('both');
  }
}
