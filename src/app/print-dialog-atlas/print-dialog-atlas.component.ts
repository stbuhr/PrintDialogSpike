import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from '@angular/core';
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
  isSelected = signal(false);

  selectAll() {
    this.isSelected.set(true);
  }
}
