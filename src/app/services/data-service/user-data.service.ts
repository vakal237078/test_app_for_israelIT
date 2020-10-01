import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {UserApiService} from '../api-service/user-api.service';
import {IUser} from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private userAS: UserApiService) {
  }

  // ********************** USERS **********************
  // tslint:disable-next-line:variable-name
  private _users$: BehaviorSubject<IUser[]> = new BehaviorSubject(null);
  public users$: Observable<IUser[]> = this._users$.asObservable();


  public setUsers(users: IUser[]) {
    this._users$.next(users);
  }

  public getUsers(): Observable<IUser[]> {
    return this.userAS.getUsers().pipe(tap((users: IUser[]) => {
      window.localStorage.setItem('lastUserId', JSON.stringify(users[users.length - 1].id));
      this.setUsers(users);
    }));
  }

  public createUser(user: IUser): Observable<IUser> {
    return this.userAS.createUser(user).pipe(tap((item: IUser) => {
      const currentValue: IUser[] = this._users$.value;
      const users = [...currentValue, item];
      this.setUsers(users);
    }));
  }

  public editUser(user: IUser): Observable<IUser> {
    return this.userAS.editUser(user).pipe(tap(() => {
      const currentValue: IUser[] = this._users$.value;
      const userIndex = currentValue.findIndex((it: IUser) => it.id === user.id);
      currentValue.splice(userIndex, 1, {...currentValue[userIndex], ...user});
      this.setUsers(currentValue);
    }));
  }

  public deleteUser(userId: number): Observable<IUser[]> {
    return this.userAS.deleteUser(userId).pipe(
      tap(() => {
        const users = this._users$.getValue().filter(user => user.id !== userId);
        this.setUsers(users);
      }));
  }
}
