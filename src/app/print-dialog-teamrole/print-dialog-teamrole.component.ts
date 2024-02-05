import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { IPrintDialogSection } from '../IPrintDialogSection';

@Component({
  selector: 'app-print-dialog-teamrole',
  standalone: true,
  imports: [CommonModule, MatRadioModule, FormsModule],
  templateUrl: './print-dialog-teamrole.component.html',
  styleUrl: './print-dialog-teamrole.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrintDialogTeamroleComponent implements IPrintDialogSection {
  isSelected = signal(true);
  condition = signal('both');

  selectAll() {
    this.isSelected.set(true);
    this.condition.set('both');
  }
}
