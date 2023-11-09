import { Component } from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {NgForOf} from "@angular/common";
import {MatStepperModule} from "@angular/material/stepper";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-olhos',
  templateUrl: './olhos.component.html',
  styleUrls: ['./olhos.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, NgForOf, MatStepperModule, FormsModule, MatButtonModule, ReactiveFormsModule]
})
export class OlhosComponent {
  readonly opcoes = ["Sim", "Não", "Não avaliado"];
  readonly dor = ["Olho esquerdo", "Olho direito", "Ambos os olhos", "Nenhum", "Não avaliado"];
}
