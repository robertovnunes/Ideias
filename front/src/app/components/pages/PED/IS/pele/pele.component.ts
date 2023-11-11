import {Component, OnInit} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {NgForOf} from "@angular/common";
import {MatStepperModule} from "@angular/material/stepper";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-pele',
  templateUrl: './pele.component.html',
  styleUrls: ['./pele.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, NgForOf, MatStepperModule, FormsModule, MatButtonModule, ReactiveFormsModule],
})
export class PeleComponent implements OnInit{

  pele!: FormGroup;
  readonly rash = [
    "escarlatiforme",
    "mobiliforme",
    "ausente",
    "nao_avaliado"
  ]
  readonly ictericia = [
    "zona 1 de Kramer",
    "zona 2 de Kramer",
    "zona 3 de Kramer",
    "zona 4 de Kramer",
    "zona 5 de Kramer",
    "Ausente",
    "Não avaliado"
  ]

  constructor(readonly formBuilder: FormBuilder) {
  }
  ngOnInit(): void {
    this.pele = this.formBuilder.group({
      rash: ['',],
      ictericia: ['',],
      cianose: ['',],
      repeticao: ['',],
    });
  }
}
