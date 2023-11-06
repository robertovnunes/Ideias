import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/pages/login/login.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { ProfileComponent } from "./components/admin/profile/profile.component";
import { ProntuarioComponent } from './components/pages/PED/prontuario.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'PED', component: ProntuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
