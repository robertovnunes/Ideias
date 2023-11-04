import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterLink, RouterOutlet} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ButtonComponent } from './components/shared/button/button.component';

import { NewuserComponent } from './components/admin/newuser/newuser.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ProfileComponent} from "./components/admin/profile/profile.component";
import {NgIf} from "@angular/common";
import { InformanteComponent } from './components/pages/prontuario/IS/informante/informante.component';
import { GeralComponent } from './components/pages/prontuario/IS/geral/geral.component';
import { PeleComponent } from './components/pages/prontuario/IS/pele/pele.component';
import { OlhosComponent } from './components/pages/prontuario/IS/olhos/olhos.component';
@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        NewuserComponent,
        HomeComponent,
        LoginComponent,
        ButtonComponent,
        ProfileComponent,
        InformanteComponent,
        GeralComponent,
        PeleComponent,
        OlhosComponent
    ],
    imports: [
        BrowserModule,
        RouterLink,
        RouterOutlet,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        NgIf
    ],
    providers: [],
    exports: [
        NavbarComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
