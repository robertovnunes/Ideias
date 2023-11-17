import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {OpcoesService} from "../../services/opcoes.service";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";

@Component({
  selector: 'app-sistemanervoso',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './sistemanervoso.component.html',
  styleUrl: './sistemanervoso.component.css'
})
export class SistemanervosoComponent implements OnInit{

  sisnervoso!: FormGroup;
  convulsoes =["Febril", "Afebril", "Ausente", "Não avaliado"];
  tipos = ["Tônica", "Clônica", "Tônico-clônica", "Não avaliado"];
  regiao = ["Localizada", "Generalizada", "Não avaliado"];

  constructor(private fb: FormBuilder, readonly opcoes: OpcoesService) { }

  ngOnInit(): void {
    this.sisnervoso = this.fb.group({
      cefaleia: [''],
      tonturas: [''],
      convulsoes: this.fb.group({
        convulsao: [''],
        tipo: [''],
        regiao: ['']
      }),
      traumascranianos: [''],
      sincopes: [''],
      paresias: [''],
      paralisias: [''],
      retardoneuropsicomotor: ['']
    });
  }

}
