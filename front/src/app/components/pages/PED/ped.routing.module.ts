import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OlhosComponent } from './IS/olhos/olhos.component';
import { PedComponent } from './ped.component';
import { InformanteComponent } from './IS/informante/informante.component';

const routes: Routes = [
  { path: 'olhos', component: OlhosComponent },
  { path: 'ped', component: PedComponent },
  { path: '', redirectTo: 'ped', pathMatch: 'full' },
  { path: 'informante', component: InformanteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedRoutingModule {

}
