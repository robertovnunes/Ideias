import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class OpcoesService {
  private opcoes1 = ["Sim", "Não", "Não avaliado"];
  private opcoes2 = ["Presente", "Ausente", "Não avaliado"];
  private opcoes3 = ["Presentes", "Ausentes", "Não avaliado"];

  constructor() { }

  getOpcoes1(){
    return this.opcoes1;
  }

  getOpcoes2(){
    return this.opcoes2;
  }

  getOpcoes3(){
    return this.opcoes3;
  }
}
