import {Component, OnInit} from '@angular/core';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
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
    telarca: ["< 8 anos", "8-13 anos", "> 13 anos", "ausente", "nao_avaliado"],
    pubarca: ["< 6 anos", " 6-13 anos", "> 13 anos", "ausente", "nao_avaliado"],
    historico_menstrual: {
      menstruacao: ["presente", "ausente", "nao_avaliado"],
      menarca: ["< 8 anos", "8-16 anos", "> 16 anos", "nao_avaliado"],
      regularidade: ["< 28 dias", "28 dias", "> 28 dias", "Não avaliado"],
      fuxo: ["Normal", "Aumentado", "Diminuído", "Não avaliado"]
    }
  };
  readonly genitalmasculino = {
    pubarca: ["< 8 anos", " 8-14 anos", "> 14 anos", "ausente", "nao_avaliado"],
    volumetesticular: ["Normal para a idade", "Menor que o normal", "Maior que o normal", "Não avaliado"],
    tamanhopenis: ["Normal para a idade", "Menor que o normal", "Maior que o normal", "Não avaliado"],
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
        presente: [''],
        corrimento_vaginal_presente: this.corrimento_vaginal_presente
      }],
      telarca: [''],
      pubarca: [''],
    });
    this.genital_masculino = this.formBuilder.group({
      pubarca: [''],
      volumetesticular: [''],
      tamanhopenis: [''],
      erecoes: [''],
      polucoes: [''],
    });
    this.genitourinario = this.formBuilder.group({
      urina: this.urina,
      corrimento: this.formBuilder.group({
        presente: [''],
        cor: [''],
        odor: [''],
      }),
      genital: this.genital_feminino.value || this.genital_masculino.value
    });
  }

  checkIsFem() {
    return this.femmasc.value.mascfem === 'feminino';
  }

  checkIsMasc() {
    return this.femmasc.value.mascfem === 'masculino';
  }

  private checkCorrimento() {
    return this.genital_feminino.value.corrimento.presente === 'presente' ||
      this.urina.value.corrimento.presente === 'presente';
  }
}
