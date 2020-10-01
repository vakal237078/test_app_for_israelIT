import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginGuard} from './services/login-service/login.guard';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', loadChildren: './login/login.module#LoginModule'},
  {path: 'users', canActivate: [LoginGuard], loadChildren: './users/users.module#UsersModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
