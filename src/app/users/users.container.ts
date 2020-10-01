import {Component, OnInit} from '@angular/core';
import {IUser} from '../interfaces/user.interface';
import {UserDataService} from '../services/data-service/user-data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-users-container',
  template: `
    <app-users
      [users]="this.users$ | async"
    ></app-users>`
})

export class UsersContainer implements OnInit {
  public users$: Observable<IUser[]>;

  constructor(private usersDS: UserDataService) {
  }

  ngOnInit() {
    this.usersDS.getUsers().subscribe();
    this.users$ = this.usersDS.users$;
  }

}
