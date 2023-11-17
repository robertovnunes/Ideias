import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedComponent } from './ped.component';
import { MusculoesqueleticoComponent} from "./IS/musculoesqueletico/musculoesqueletico.component";

const routes: Routes = [
  { path: 'ped', component: PedComponent },
  { path: 'ped/musculo', component: MusculoesqueleticoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedRoutingModule {

}
