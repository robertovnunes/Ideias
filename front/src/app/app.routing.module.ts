import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/pages/login/login.component";
import { HomeComponent } from "./components/pages/home/home.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
