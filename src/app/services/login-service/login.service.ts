import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private snackBar: MatSnackBar) {
  }

  public login(data) {
    if (data.userName === 'qweQWE123' && data.password === 'qweQWE123') {
      window.localStorage.setItem('userLogged', JSON.stringify(true));
    } else {
      window.localStorage.setItem('userLogged', JSON.stringify(false));
      this.snackBar.open('Incorrect credentials', '', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    }
  }
}

