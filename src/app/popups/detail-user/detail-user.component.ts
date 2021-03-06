import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {IUser} from '../../interfaces/user.interface';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit {
  @Output() deleteUser: EventEmitter<number> = new EventEmitter<number>(null);

  @Output() userEditEmitter: EventEmitter<IUser> = new EventEmitter<IUser>(null);

  public userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  constructor(private dialogRef: MatDialogRef<any>,
              @Inject(MAT_DIALOG_DATA) public data?: IUser) {
  }

  ngOnInit() {
    if (this.data) {
      this.userForm.get('name').setValue(this.data.name);
      this.userForm.get('description').setValue(this.data.description);
    }
  }

  public addUser(): void {
    const user: IUser = this.userForm.getRawValue();
    if (this.data && this.data.id) {
      user.id = this.data.id;
      user.createdAt = this.data.createdAt;
      user.editedAt = new Date();
      this.userEditEmitter.emit(user);
    }
    this.dialogRef.close();
  }

  public deletedUser(): void {
    this.deleteUser.emit(this.data.id);
    this.dialogRef.close(true);
  }

  public closePopup(): void {
    this.dialogRef.close();
  }
}
