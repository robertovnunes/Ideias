import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedComponent } from './ped.component';
import { AntecedentesComponent } from "./antecedentes/antecedentes.component";
import {QpdhdaComponent} from "./qpdhda/qpdhda.component";

const routes: Routes = [
  { path: 'ped', component: PedComponent },
  { path: 'PED', redirectTo: 'ped'},
  { path: 'ped/antecedentes', component: AntecedentesComponent },
  {path: 'ped/qpd', component: QpdhdaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedRoutingModule {

}
