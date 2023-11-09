import {Component, OnInit} from '@angular/core';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-genitourinario',
  templateUrl: './genitourinario.component.html',
  styleUrls: ['./genitourinario.component.css'],
  imports: [
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    NgForOf
  ],
  standalone: true
})
export class GenitourinarioComponent implements OnInit {

  readonly opcoes = ["Sim", "Não", "Não avaliado"];
  readonly urina = {
    quantidade: [
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
      "nao_avaliado"],
  };
  readonly  genital_feminino = {
    corrimento_vaginal:["presente", "ausente", "nao_avaliado"],
    corrimento_vaginal_presente: {
      cor: [
        "Claro",
        "Leitoso",
        "Esverdeado",
        "nao_avaliado"],
      odor: [
        "Inodoro",
        "Fétido",
        "nao_avaliado"],
      prurido: ["presente", "ausente", "nao_avaliado"],
    },
    telarca: ["presente", "ausente", "nao_avaliado"],
    pubarca: ["presente", "ausente", "nao_avaliado"],
    historico_menstrual: {
      menstruacao: ["presente", "ausente", "nao_avaliado"],
      menarca: ["< 8 anos", "8-16 anos", "> 16 anos", "nao_avaliado"],
      rgularidade: ["< 28 dias", "28 dias", "> 28 dias", "Não avaliado"],
      fuxo: ["Normal", "Aumentado", "Diminuído", "Não avaliado"]
    }
  }
  presente: any;

  constructor() {
  }

  ngOnInit() {
  }

}
