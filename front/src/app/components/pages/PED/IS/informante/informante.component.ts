import {Component, OnInit} from '@angular/core';
import { NgForOf} from "@angular/common";
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from "@angular/material/stepper";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-informante',
  templateUrl: './informante.component.html',
  styleUrls: ['./informante.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, NgForOf, MatStepperModule, FormsModule, MatButtonModule, ReactiveFormsModule],
})
export class InformanteComponent  implements OnInit{
  informante!: FormGroup;
  escolaridade = [
    "Fundamental incompleto",
    "Fundamental completo",
    "Ensino médio incompleto",
    "Ensino médio completo",
    "Superior incompleto",
    "Superior completo",
    "Pós-graduação",
    "Mestrado",
    "Doutorado",
    "Não sabe ler e escrever"
  ]

  constructor(private formBuilder: FormBuilder) { }

   ngOnInit(): void {
     this.informante = this.formBuilder.group({
       nome: ['', Validators.required],
       sexo: ['', Validators.required],
       endereco: ['', Validators.required],
       complemento: ['', Validators.required],
       bairro: ['', Validators.required],
       cidade: ['', Validators.required],
       numero: ['', Validators.required],
       uf: ['', Validators.required],
       cep: ['', Validators.required],
       escolaridade: ['', Validators.required],
       parentesco: ['', Validators.required],
       obs: [''],
     });   }
   estados = [
    "Acre",
    "Alagoas",
    "Amapá",
    "Amazonas",
    "Bahia",
    "Ceará",
    "Distrito Federal",
    "Espírito Santo",
    "Goiás",
    "Maranhão",
    "Mato Grosso",
    "Mato Grosso do Sul",
    "Minas Gerais",
    "Pará",
    "Paraíba",
    "Paraná",
    "Pernambuco",
    "Piauí",
    "Rio de Janeiro",
    "Rio Grande do Norte",
    "Rio Grande do Sul",
    "Rondônia",
    "Roraima",
    "Santa Catarina",
    "São Paulo",
    "Sergipe",
    "Tocantins",
  ];


}
