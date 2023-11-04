import { Component } from '@angular/core';

@Component({
  selector: 'app-olhos',
  templateUrl: './olhos.component.html',
  styleUrls: ['./olhos.component.css']
})
export class OlhosComponent {
  readonly opcoes = ["Sim", "Não", "Não avaliado"]
}
