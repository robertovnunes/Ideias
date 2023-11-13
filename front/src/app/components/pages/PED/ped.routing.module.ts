import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedComponent } from './ped.component';

const routes: Routes = [
  { path: 'ped', component: PedComponent },
  { path: '', redirectTo: 'ped', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedRoutingModule {

}
