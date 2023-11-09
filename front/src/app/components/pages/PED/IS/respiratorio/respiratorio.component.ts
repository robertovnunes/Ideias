import { Component } from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {NgForOf} from "@angular/common";
import {MatStepperModule} from "@angular/material/stepper";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";

@Component({
  selector: 'app-respiratorio',
  templateUrl: './respiratorio.component.html',
  styleUrls: ['./respiratorio.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, NgForOf, MatStepperModule, FormsModule, MatButtonModule, ReactiveFormsModule, MatCheckboxModule],
})
export class RespiratorioComponent {
  readonly corrimento_nasal = [
  "claro",
  "esverdeado",
  "ausente",
  "nao_avaliado"];
  readonly opcoes = ["Sim", "Não", "Não avaliado"];
  readonly tipo = ["produtiva", "seca", "Não avaliado"];


}
