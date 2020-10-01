import {Component, EventEmitter, Inject, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent {
  @Output() deleteUser: EventEmitter<number> = new EventEmitter<number>(null);

  constructor(public dialogRef: MatDialogRef<DeleteUserComponent>,
              @Inject(MAT_DIALOG_DATA) public data?: number) {
  }

  public onCancel(): void {
    this.dialogRef.close();
  }

  public onAccept(): void {
    this.deleteUser.emit(this.data);
    this.dialogRef.close(true);
  }
}
