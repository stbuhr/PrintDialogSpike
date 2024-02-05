import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { IPrintDialogSection } from '../IPrintDialogSection';

@Component({
  selector: 'app-print-dialog-teamrole',
  standalone: true,
  imports: [CommonModule, MatRadioModule],
  templateUrl: './print-dialog-teamrole.component.html',
  styleUrl: './print-dialog-teamrole.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrintDialogTeamroleComponent implements IPrintDialogSection {
  isSelected = signal(false);

  selectAll() {
    this.isSelected.set(true);
  }
}
