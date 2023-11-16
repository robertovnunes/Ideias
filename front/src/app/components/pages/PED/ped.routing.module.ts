import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedComponent } from './ped.component';
import { GenitourinarioComponent} from "./IS/genitourinario/genitourinario.component";

const routes: Routes = [
  { path: 'ped', component: PedComponent },
  { path: 'ped/genitourinario', component: GenitourinarioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedRoutingModule {

}
