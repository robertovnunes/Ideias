import {Component, OnInit} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {JsonPipe, NgForOf} from "@angular/common";
import {MatStepperModule} from "@angular/material/stepper";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-geral',
  templateUrl: './geral.component.html',
  styleUrls: ['./geral.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, NgForOf, MatStepperModule, FormsModule, MatButtonModule, ReactiveFormsModule, JsonPipe],
})
export class GeralComponent implements OnInit{
  geral!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.geral = this.formBuilder.group({
      febre: new FormControl('', Validators.required),
      peso: new FormControl('', Validators.required),
      atividade: new FormControl('', Validators.required),
      apetite: new FormControl('', Validators.required),
      altura: new FormControl('', Validators.required),
      obs: new FormControl('', Validators.required),
    });
  }

}
