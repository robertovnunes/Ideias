import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatStepperModule} from "@angular/material/stepper";
import {PrenatalComponent} from "./prenatal/prenatal.component";
import {NatalComponent} from "./natal/natal.component";
import {NeonatalComponent} from "./neonatal/neonatal.component";
import { AlimentacaoComponent } from './alimentacao/alimentacao.component';

@Component({
  selector: 'app-antecedentes',
  standalone: true,
  imports: [CommonModule, MatStepperModule, PrenatalComponent, NatalComponent, NeonatalComponent, AlimentacaoComponent],
  templateUrl: './antecedentes.component.html',
  styleUrl: './antecedentes.component.css'
})
export class AntecedentesComponent {

}
