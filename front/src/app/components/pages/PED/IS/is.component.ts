import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {MatStep, MatStepper} from "@angular/material/stepper";
import {CdkStep} from "@angular/cdk/stepper";

@Component({
  selector: 'app-is',
  templateUrl: './is.component.html',
  styleUrls: ['./is.component.css']
})
export class ISComponent implements OnInit, AfterViewInit {

  @ViewChild('stepper') stepper!: MatStepper;
  steps: MatStep[] = [];
  currentStep!: CdkStep;

  constructor(private renderer: Renderer2, private el: ElementRef) {

  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.steps = this.stepper._steps.toArray();
    this.steps.forEach(step => {
      console.log(step.label);
    });


  }

}
