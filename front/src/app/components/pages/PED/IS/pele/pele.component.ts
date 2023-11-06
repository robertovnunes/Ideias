import { Component } from '@angular/core';

@Component({
  selector: 'app-pele',
  templateUrl: './pele.component.html',
  styleUrls: ['./pele.component.css']
})
export class PeleComponent {
  readonly rash = [
    "escarlatiforme",
    "mobiliforme",
    "ausente",
    "nao_avaliado"
  ]
  readonly ictericia = [
    "zona 1 de Kramer",
    "zona 2 de Kramer",
    "zona 3 de Kramer",
    "zona 4 de Kramer",
    "zona 5 de Kramer",
    "Ausente",
    "Não avaliado"
  ]
}
