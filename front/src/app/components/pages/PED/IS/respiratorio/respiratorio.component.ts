import {Component, OnInit} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {JsonPipe, NgForOf} from "@angular/common";
import {MatStepperModule} from "@angular/material/stepper";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";

@Component({
  selector: 'app-respiratorio',
  templateUrl: './respiratorio.component.html',
  styleUrls: ['./respiratorio.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, NgForOf, MatStepperModule, FormsModule, MatButtonModule, ReactiveFormsModule, MatCheckboxModule, JsonPipe],
})
export class RespiratorioComponent implements OnInit{
  readonly corrimento_nasal = [
  "claro",
  "esverdeado",
  "ausente",
  "nao_avaliado"];
  readonly opcoes = ["Sim", "Não", "Não avaliado"];
  readonly tipo = ["produtiva", "seca", "Não avaliado"];
  respiratorio!: FormGroup;

  constructor(readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.respiratorio = this.formBuilder.group({
      corrimento: [''],
      sftosse_alimentacao: [''],
      epistaxe: [''],
      tosse: this.formBuilder.group({
        tossenaoavaliado: [false, Validators.required],
        duracao:[''],
        tipo: [''],
        periodo: ['']
      }),
      resfriados_frequentes: [''],
      dor_toracica: [''],
      dificuldade_respiratoria: [''],
      hemoptise: ['']
    });
  }


}
