import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {IUser} from '../../interfaces/user.interface';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  // @Input() projects: IProject[];
  // public dailyReport: IDailyReport;
  @Output() userCreateEmitter: EventEmitter<IUser> = new EventEmitter<IUser>(null);
  @Output() userEditEmitter: EventEmitter<IUser> = new EventEmitter<IUser>(null);

  public userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  public submitted = false;

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
    this.submitted = true;
    if (this.userForm.valid) {
      const user: IUser = this.userForm.getRawValue();
      if (this.data && this.data.id) {
        user.id = this.data.id;
        user.createdAt = this.data.createdAt;
        user.editedAt = new Date();
        this.userEditEmitter.emit(user);
      } else {
        user.id = Number(JSON.parse(window.localStorage.getItem('lastUserId'))) + 1;
        user.createdAt = new Date();
        user.editedAt = new Date();
        this.userCreateEmitter.emit(user);
      }
      this.dialogRef.close();
    }
  }

  public closePopup(): void {
    this.dialogRef.close();
  }
}
