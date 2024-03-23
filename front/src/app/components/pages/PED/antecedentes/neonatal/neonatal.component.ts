import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'app-neonatal',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, ReactiveFormsModule, MatCheckboxModule, MatInputModule],
  templateUrl: './neonatal.component.html',
  styleUrl: './neonatal.component.css'
})
export class NeonatalComponent implements OnInit {

  neonatal!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.neonatal = this.fb.group({
      choroespontaneo: [''],
      grauatividade: [''],
      cianose: [''],
      reanimacao: [''],
      apgar1: [''],
      apgar5: [''],
      ictericia: [''],
      rash: [''],
      sangramentos: [''],
      vomitos: [''],
      infeccoes: [''],
      anomaliascongenitas: [''],
      paralisias: [''],
      convulsoes: [''],
      coriza: [''],
      permeabilidadenasal: [''],
      dados_antropometricos: this.fb.group({
        peso: [''],
        comprimento: [''],
        pc: [''],
        pt: ['']
      })
    });
  }

}
