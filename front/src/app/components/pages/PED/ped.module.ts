import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { JsonPipe} from "@angular/common";

import {PedRoutingModule} from './ped.routing.module';

import {OlhosComponent} from './IS/olhos/olhos.component';
import {InformanteComponent} from './IS/informante/informante.component';
import {PeleComponent} from './IS/pele/pele.component';
import {PedComponent} from './ped.component';
import {MatStepperModule} from "@angular/material/stepper";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {GeralComponent} from "./IS/geral/geral.component";
import {ISComponent} from './IS/is.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {OuvidosComponent} from './IS/ouvidos/ouvidos.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {RespiratorioComponent} from './IS/respiratorio/respiratorio.component';
import {CardiovascularComponent} from './IS/cardiovascular/cardiovascular.component';
import {GastrointestinalComponent} from './IS/gastrointestinal/gastrointestinal.component';
import {GenitourinarioComponent} from "./IS/genitourinario/genitourinario.component";
import { MusculoesqueleticoComponent } from './IS/musculoesqueletico/musculoesqueletico.component';


@NgModule({
  declarations: [
    PedComponent,
    ISComponent
  ],
  imports: [
    CommonModule,
    JsonPipe,
    PedRoutingModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    InformanteComponent,
    BrowserAnimationsModule,
    GeralComponent,
    MatExpansionModule,
    MatSlideToggleModule,
    RespiratorioComponent,
    OuvidosComponent,
    OlhosComponent,
    GastrointestinalComponent,
    CardiovascularComponent,
    GenitourinarioComponent,
    PeleComponent,
    MusculoesqueleticoComponent
  ],
  exports: [
    MatInputModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatExpansionModule,
    MatSlideToggleModule,
  ]
})
export class PedModule {
}
