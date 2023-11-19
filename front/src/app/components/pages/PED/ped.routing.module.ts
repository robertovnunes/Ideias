import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedComponent } from './ped.component';
import { AntecedentesComponent } from "./antecedentes/antecedentes.component";

const routes: Routes = [
  { path: 'ped', component: PedComponent },
  { path: 'ped/antecedentes', component: AntecedentesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedRoutingModule {

}
