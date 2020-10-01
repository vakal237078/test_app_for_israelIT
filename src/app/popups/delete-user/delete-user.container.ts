import {Component} from '@angular/core';
import {UserDataService} from '../../services/data-service/user-data.service';


@Component({
  selector: 'app-delete-user-container',
  template: '<app-delete-user (deleteUser)="deleteUser($event)"></app-delete-user>'
})
export class DeleteUserContainer {

  constructor(private userDS: UserDataService) {
  }

  public deleteUser(userId: number) {
    this.userDS.deleteUser(userId).subscribe();
  }
}
