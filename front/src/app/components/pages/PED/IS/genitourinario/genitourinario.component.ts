import {Component, OnInit} from '@angular/core';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";

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
    NgForOf,
    ReactiveFormsModule,
    NgIf
  ],
  standalone: true
})
export class GenitourinarioComponent implements OnInit {


  femmasc!: FormGroup;

  readonly opcoes = ["Sim", "Não", "Não avaliado"];
  readonly urinaop = {
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
  readonly genitalfeminino = {
    corrimento_vaginal: ["presente", "ausente", "nao_avaliado"],
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
      regularidade: ["< 28 dias", "28 dias", "> 28 dias", "Não avaliado"],
      fuxo: ["Normal", "Aumentado", "Diminuído", "Não avaliado"]
    }
  }
  urina!: FormGroup;
  genitourinario!: FormGroup;
  historico_menstrual!: FormGroup;
  corrimento_vaginal_presente!: FormGroup;
  genital_feminino!: FormGroup;
  genital_masculino!: FormGroup;
  isFem = this.checkIsFem();
  isMasc = this.checkIsMasc();
  corrimentoPresente = this.checkCorrimento();

  constructor(readonly formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.femmasc = this.formBuilder.group({
      genital: ['', Validators.required]
    });
    this.urina = this.formBuilder.group({
      quantidade: ['', Validators.required],
      jato: ['', Validators.required],
      cor: ['', Validators.required],
      odor: ['', Validators.required],
      frequencia: ['', Validators.required]
    });
    this.historico_menstrual = this.formBuilder.group({
      menstruacao: [''],
      menarca: [''],
      regularidade: [''],
      fuxo: ['']
    });
    this.corrimento_vaginal_presente = this.formBuilder.group({
      cor: [''],
      odor: [''],
      prurido: [''],
    });
    this.genital_feminino = this.formBuilder.group({
      corrimento_vaginal: [{
        presente: ['', Validators.required],
        corrimento_vaginal_presente: this.corrimento_vaginal_presente
      }],
      telarca: [''],
      pubarca: [''],
    })
    this.genitourinario = this.formBuilder.group({
      urina: this.urina,
      corrimento: this.formBuilder.group({
        presente: ['', Validators.required],
        cor: [''],
        odor: [''],
      }),
      genital: this.genital_feminino
    });
  }

  checkIsFem() {
    return this.femmasc.value.mascfem === 'feminino';
  }

  checkIsMasc() {
    return this.femmasc.value.mascfem === 'masculino';
  }

  private checkCorrimento() {
    return this.genital_feminino.value.corrimento.presente === 'presente';
  }
}
