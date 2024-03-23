import {AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {MatStep, MatStepper} from "@angular/material/stepper";
import {Paciente} from "../../../../service/interfaces/paciente";

@Component({
  selector: 'app-is',
  templateUrl: './is.component.html',
  styleUrls: ['./is.component.css']
})
export class ISComponent implements OnInit, AfterViewInit {

  @ViewChild('stepper') stepper!: MatStepper;
  steps: MatStep[] = [];
  currentStep!: [MatStep | null];
  previousStep!: [MatStep | null];
  nextStep!: [MatStep | null];
  isAtual!: boolean;

  paciente!: Paciente;


  constructor() {

  }

  ngOnInit(): void {

  }
  obterPassoAtual() {
    // O método selectedIndex do MatStepper retorna o índice do passo atual
    return this.stepper.selectedIndex;
  }

  podeMostrar(x: number) {
    let index = this.obterPassoAtual();
    if(index < 0 || index > this.steps.length - 1) {
      return false;
    }
    return this.currentStep[index] !== null && (this.previousStep[index] !== null || this.nextStep[index] !== null);

  }

  ngAfterViewInit(): void {
    this.steps = this.stepper._steps.toArray();
    this.steps.forEach((step, index) => {
        if (step !== null) {
        this.currentStep[index] = step;
        this.previousStep[index] = index > 0 ? this.steps[index - 1] : null;
        this.nextStep[index] = index < this.steps.length - 1 ? this.steps[index + 1] : null;
      }
    //continuar a visualização dos steps
    });
    }


  protected readonly alert = alert;
  protected readonly console = console;
}
