import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterLink, RouterOutlet} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing.module';

import {NavbarComponent} from './components/shared/navbar/navbar.component';
import {ButtonComponent} from './components/shared/button/button.component';

import {NewuserComponent} from './components/admin/newuser/newuser.component';
import {HomeComponent} from './components/pages/home/home.component';
import {LoginComponent} from './components/pages/login/login.component';
import {ProfileComponent} from "./components/admin/profile/profile.component";
import {NgIf} from "@angular/common";
import {PedModule} from "./components/pages/PED/ped.module";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewuserComponent,
    HomeComponent,
    LoginComponent,
    ButtonComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    RouterLink,
    RouterOutlet,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgIf,
    PedModule
  ],
  providers: [],
  exports: [
    NavbarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
