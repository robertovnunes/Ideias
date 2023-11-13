import {Component, OnInit} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {NgForOf} from "@angular/common";
import {MatStepperModule} from "@angular/material/stepper";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-cardiovascular',
  templateUrl: './cardiovascular.component.html',
  styleUrls: ['./cardiovascular.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, NgForOf, MatStepperModule, FormsModule, MatButtonModule, ReactiveFormsModule],

})
export class CardiovascularComponent implements OnInit{
  cardiovascular!: FormGroup;

  readonly opcoes = ["Sim", "Não", "Não avaliado"];
  readonly cianose = ["labial", "generalizada", "ausente", "nao_avaliado"];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.cardiovascular = this.formBuilder.group({
      dispineia: ['', Validators.required],
      palpitacao: ['', Validators.required],
      cianose: ['', Validators.required],
      taquicardia: ['', Validators.required]
    });
    }

}
