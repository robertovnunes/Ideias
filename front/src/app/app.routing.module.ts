import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/pages/login/login.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { ProfileComponent } from "./components/admin/profile/profile.component";
import { PedRoutingModule } from "./components/pages/PED/ped.routing.module";


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PedRoutingModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
