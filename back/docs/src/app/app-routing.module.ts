import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsuariosComponent} from "./components/usuarios/usuarios.component";
import {HomeComponent} from "./components/home/home.component";


const routes: Routes = [
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
