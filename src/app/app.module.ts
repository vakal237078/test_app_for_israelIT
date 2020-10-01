import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {AddUserComponent} from './popups/add-user/add-user.component';
import {AddUserContainer} from './popups/add-user/add-user.container';
import {SharedModule} from './shared/shared.module';
import {DeleteUserComponent} from './popups/delete-user/delete-user.component';
import {DeleteUserContainer} from './popups/delete-user/delete-user.container';
import {DetailUserComponent} from './popups/detail-user/detail-user.component';
import {DetailUserContainer} from './popups/detail-user/detail-user.container';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    AddUserContainer,
    DeleteUserComponent,
    DeleteUserContainer,
    DetailUserComponent,
    DetailUserContainer
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  entryComponents: [
    AddUserComponent,
    AddUserContainer,
    DeleteUserComponent,
    DeleteUserContainer,
    DetailUserComponent,
    DetailUserContainer
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
