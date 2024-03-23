import {JsonPipe, NgForOf} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-gastrointestinal',
  templateUrl: './gastrointestinal.component.html',
  styleUrls: ['./gastrointestinal.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, NgForOf, MatStepperModule, FormsModule, MatButtonModule, ReactiveFormsModule, JsonPipe]
})
export class GastrointestinalComponent implements OnInit {

  gastrointestinal!: FormGroup;

  readonly opcoes = ["Sim", "Não", "Não avaliado"];
  readonly opcoesvomito = ["Apos alimentacao", "Sem causa aparente", "Não", "Não avaliado"];
  readonly evacuacao = ["Constipado", "Normal", "Diarreia", "Não avaliado"];
  readonly aspecto = ["Normal","Branca", "Escuras", "Não avaliado"];

  constructor(readonly formBuilder: FormBuilder) { }

  ngOnInit() {
    this.gastrointestinal = this.formBuilder.group({
      nauseas: ['', Validators.required],
      vomitos: ['', Validators.required],
      dorabdominal: ['', Validators.required],
      tenesmo: ['', Validators.required],
      evacuacao: ['', Validators.required],
      aspectofezes: ['', Validators.required]
    });
  }

}
