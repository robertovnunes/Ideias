import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genitourinario',
  templateUrl: './genitourinario.component.html',
  styleUrls: ['./genitourinario.component.css']
})
export class GenitourinarioComponent implements OnInit {

  readonly opcoes = ["Sim", "Não", "Não avaliado"];
  readonly urina = {
    quantidade:[
      "normal",
      "abundante",
      "escassa",
      "nao_avaliado"],
    jato: [
      "continuo",
      "partido",
      "nao_avaliado"],
      cor: [
        "Clara",
        "Escura",
        "nao_avaliado"],
      odor: [
        "Inodora",
        "Fétida",
        "nao_avaliado"],
      frequencia: [
        "normal",
        "aumentada",
        "diminuida",
        "nao_avaliado"]
  };
  readonly corrimento = {
    presente: ["Sim", "Não", "nao_avaliado"],
    cor: [
      "Claro",
      "Leitoso",
      "nao_avaliado"],
    odor: [
      "Inodoro",
      "Fétido",
      "nao_avaliado"]
  };
  
  constructor() { }

  ngOnInit() {
  }

}
