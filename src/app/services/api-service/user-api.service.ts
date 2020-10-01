import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {Mapper} from '../mapper';
import {IUser} from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private httpClient: HttpClient) {
  }

  public getUsers(): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}users`).pipe(
      map((users: any[]) => Mapper.mapUsersToIUsers(users))
    );
  }

  public createUser(user: IUser): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}users`, user).pipe(
      map((item: any) => Mapper.mapUserToIUser(item))
    );
  }

  public editUser(user: IUser): Observable<any> {
    return this.httpClient.put(`${environment.apiUrl}users/${user.id}`, user).pipe(
      map((item: any) => Mapper.mapUserToIUser(item))
    );
  }

  public deleteUser(userId: number): Observable<any> {
    return this.httpClient.delete(`${environment.apiUrl}users/${userId}`);
  }

  // public changeStatus(id: string, status: number): Observable<any> {
  //   return this.httpClient.patch(`${environment.apiUrl}user/edit`, {id, status});
  // }
}
