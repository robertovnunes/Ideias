import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedComponent } from './ped.component';
import {SistemanervosoComponent} from "./IS/sistemanervoso/sistemanervoso.component";

const routes: Routes = [
  { path: 'ped', component: PedComponent },
  { path: 'ped/nervoso', component: SistemanervosoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedRoutingModule {

}
