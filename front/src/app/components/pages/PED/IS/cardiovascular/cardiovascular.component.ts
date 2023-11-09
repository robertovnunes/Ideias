import { Component } from '@angular/core';

@Component({
  selector: 'app-cardiovascular',
  templateUrl: './cardiovascular.component.html',
  styleUrls: ['./cardiovascular.component.css']
})
export class CardiovascularComponent {
  readonly opcoes = ["Sim", "Não", "Não avaliado"];
  readonly cianose = ["labial", "generalizada", "ausente", "nao_avaliado"];
}
