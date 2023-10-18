import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterLink, RouterOutlet} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ButtonComponent } from './components/shared/button/button.component';

import { NewuserComponent } from './components/admin/newuser/newuser.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewuserComponent,
    HomeComponent,
    LoginComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    RouterLink,
    RouterOutlet,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
