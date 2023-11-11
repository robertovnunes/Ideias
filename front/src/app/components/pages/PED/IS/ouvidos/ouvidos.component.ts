import {Component, OnInit} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {NgForOf} from "@angular/common";
import {MatStepperModule} from "@angular/material/stepper";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-ouvidos',
  templateUrl: './ouvidos.component.html',
  styleUrls: ['./ouvidos.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, NgForOf, MatStepperModule, FormsModule, MatButtonModule, ReactiveFormsModule],
})
export class OuvidosComponent implements OnInit{
  readonly opcoes = ["Sim", "Não", "Não avaliado"];
  ouvidos!: FormGroup;
  constructor(readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.ouvidos = this.formBuilder.group({
      dor: ['', Validators.required],
      secrecao: ['', Validators.required],
      infeccoes_frequentes: ['', Validators.required],
      acuidade: ['', Validators.required]
    });
  }
}
