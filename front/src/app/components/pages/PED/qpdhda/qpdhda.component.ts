import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from "@angular/material/input";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-qpdhda',
  standalone: true,
  imports: [CommonModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './qpdhda.component.html',
  styleUrl: './qpdhda.component.css'
})
export class QpdhdaComponent implements OnInit{
  qpdhda!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.qpdhda = this.fb.group({
      queixa_principal: [''],
      historia_doenca_atual: [''],
      adendo1: [''],
      adendo2: [''],
      adendo3: ['']
    });
  }

}
