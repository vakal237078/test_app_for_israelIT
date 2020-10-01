import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {UsersContainer} from './users.container';

const routes: Routes = [{
  path: '', component: UsersContainer
}];

@NgModule({
  declarations: [UsersComponent, UsersContainer],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsersModule {
}
