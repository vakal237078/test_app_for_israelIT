import {Component, OnInit} from '@angular/core';
import {LoginService} from '../services/login-service/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-container',
  template: `
    <app-login
      (emitLoginData)="login($event)"
    ></app-login>`
})

export class LoginContainer implements OnInit {

  constructor(private loginS: LoginService,
              private router: Router) {
  }

  ngOnInit() {
  }

  public login(data) {
    this.loginS.login(data);
    this.router.navigate(['/users']).then();
  }
}
