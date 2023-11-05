import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OlhosComponent } from './IS/olhos/olhos.component';
import { ProntuarioComponent } from './prontuario.component';

const routes: Routes = [
  { path: 'olhos', component: OlhosComponent },
  { path: 'prontuariopediatria', component: ProntuarioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProntuarioPediatriaRoutingModule {

}
