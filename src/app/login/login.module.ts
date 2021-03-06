import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginContainer} from './login.container';
import {SharedModule} from '../shared/shared.module';

const routes: Routes = [{
  path: '', component: LoginContainer
}];

@NgModule({
  declarations: [LoginComponent, LoginContainer],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class LoginModule {
}
