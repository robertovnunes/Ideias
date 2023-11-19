import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";

@Component({
  selector: 'app-prenatal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatCheckboxModule],
  templateUrl: './prenatal.component.html',
  styleUrl: './prenatal.component.css'
})
export class PrenatalComponent implements OnInit {

  prenatal!: FormGroup;

  constructor(private fb: FormBuilder) {

  }
  ngOnInit(): void {
    this.prenatal = this.fb.group({
      acompanhamento: this.fb.group({
        realizou: [''],
        onde: [''],
        consultas: [''],
        duracao: ['']
      }),
      anormalidades: [''],
      medicamentos: [''],
      radiacoes: [''],
      doencascirurgicas: this.fb.group({
        presente: [''],
        periodo: ['']
      }),
      grupo_sanquineo: [''],
      testes_lueticos: [''],
      antitetanica: this.fb.group({
        realizou: [''],
        quantidade: ['']
      }),
      estado_nutricional: this.fb.group({
        alimentacao: [''],
        peso: [''],
        anemia: ['']
      })
    });
  }

}
