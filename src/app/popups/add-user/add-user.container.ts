import {Component} from '@angular/core';
import {IUser} from '../../interfaces/user.interface';
import {UserDataService} from '../../services/data-service/user-data.service';


@Component({
  selector: 'app-add-user-container',
  template: '<app-add-user (userCreateEmitter)="createUser($event)" (userEditEmitter)="editUser($event)"></app-add-user>'
})
export class AddUserContainer {

  constructor(private userDS: UserDataService) {
  }

  public createUser(user: IUser) {
    this.userDS.createUser(user).subscribe();
  }

  public editUser(user: IUser) {
    this.userDS.editUser(user).subscribe(() => this.userDS.getUsers().subscribe());
  }

}
