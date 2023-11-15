import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class OpcoesService {
  private opcoes1 = ["Sim", "Não", "Não avaliado"];
  private opcoes2 = ["Presente", "Ausente", "Não avaliado"];

  constructor() { }

  getOpcoes1(){
    return this.opcoes1;
  }

  getOpcoes2(){
    return this.opcoes2;
  }
}
