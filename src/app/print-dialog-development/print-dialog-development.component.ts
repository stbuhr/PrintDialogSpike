import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { IPrintDialogSection } from '../IPrintDialogSection';

@Component({
  selector: 'app-print-dialog-development',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './print-dialog-development.component.html',
  styleUrl: './print-dialog-development.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrintDialogDevelopmentComponent implements IPrintDialogSection {
  isSelected = signal(false);

  selectAll() {
    this.isSelected.set(true);
  }
}
