import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-confirm-dialog',
  standalone: false,

  templateUrl: './confirm-dialog.component.html',
})
export class ConfirmDialogComponent {

  readonly dialogRef = inject(MatDialogRef<ConfirmDialogComponent>);
  readonly data = inject<Hero>(MAT_DIALOG_DATA);

  onNoClose(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }

}
