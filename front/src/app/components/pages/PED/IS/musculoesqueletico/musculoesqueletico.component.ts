import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {OpcoesService} from "../../services/opcoes.service";
import {NgForOf} from "@angular/common";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";

@Component({
  selector: 'app-musculoesqueletico',
  templateUrl: './musculoesqueletico.component.html',
  styleUrls: ['./musculoesqueletico.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf,
    MatInputModule,
    MatSelectModule
  ]
})
export class MusculoesqueleticoComponent implements OnInit {

  musculoesqueletico!: FormGroup;
  constructor(private formBuilder: FormBuilder, readonly opcoes: OpcoesService) { }

  ngOnInit() {
    this.musculoesqueletico = this.formBuilder.group({
      deformidades: [''],
      tumefacoes: [''],
      fraquezamuscular: [''],
      dorosseaart: ['']
    });
  }

}
