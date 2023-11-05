import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProntuarioPediatriaRoutingModule } from './prontuariopediatria.routing.module';

import { OlhosComponent } from './IS/olhos/olhos.component';
import { InformanteComponent } from './IS/informante/informante.component';
import { GeralComponent } from './IS/geral/geral.component';
import { PeleComponent } from './IS/pele/pele.component';
import { ProntuarioComponent } from './prontuario.component';


@NgModule({
  declarations: [
    OlhosComponent,
    InformanteComponent,
    GeralComponent,
    PeleComponent,
    ProntuarioComponent
  ],
  imports: [
    CommonModule,
    ProntuarioPediatriaRoutingModule,
  ]
})
export class ProntuarioPediatriaModule { }
