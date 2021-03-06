import {Component} from '@angular/core';
import {IUser} from '../../interfaces/user.interface';
import {UserDataService} from '../../services/data-service/user-data.service';


@Component({
  selector: 'app-detail-user-container',
  template: '<app-detail-user (deleteUser)="deleteUser($event)" (userEditEmitter)="editUser($event)"></app-detail-user>'
})
export class DetailUserContainer {

  constructor(private userDS: UserDataService) {
  }

  public deleteUser(userId: number) {
    this.userDS.deleteUser(userId).subscribe();
  }

  public editUser(user: IUser) {
    this.userDS.editUser(user).subscribe(() => this.userDS.getUsers().subscribe());
  }

}
