import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";

@Component({
  selector: 'app-natal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatCheckboxModule],
  templateUrl: './natal.component.html',
  styleUrl: './natal.component.css'
})
export class NatalComponent implements OnInit{
  natal!: FormGroup;
  tipoparto = ['Espontaneo', 'Instrumentado', 'Cirurgico'];
  tiposapresentacao = ['Cefalica', 'Pelvica', 'Outra'];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.natal = this.fb.group({
      duracao: [''],
      tipo_parto: [''],
      complicacoes: [''],
      apresentacao: [''],
      anestesia: [''],
      analgesico: [''],
      analgesia: this.fb.group({
        tipo: [''],
        duracao: ['']
      }),
    });
  }

}
