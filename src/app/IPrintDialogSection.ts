import { WritableSignal } from '@angular/core';

export interface IPrintDialogSection {
  isSelected: WritableSignal<boolean>;
  selectAll(): void;
}
