import {Component, OnInit} from '@angular/core';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {JsonPipe, NgForOf, NgIf} from "@angular/common";

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
    NgIf,
    JsonPipe
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
  genital_feminino!: FormGroup;
  genital_masculino!: FormGroup;
  isFem = this.checkIsFem();
  isMasc = this.checkIsMasc();
  corrimentoPresente: boolean = this.checkCorrimento();

  constructor(readonly formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.genital_feminino = this.formBuilder.group({
      corrimento_vaginal: [{
        presente: [''],
        corrimento_vaginal_presente: this.formBuilder.group({
          cor: [''],
          odor: [''],
          prurido: [''],
        })
      }],
      historico_menstrual: this.formBuilder.group({
        menstruacao: [''],
        menarca: [''],
        regularidade: [''],
        fuxo: ['']
      }),
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
      urina: this.formBuilder.group({
        quantidade: ['', Validators.required],
        jato: ['', Validators.required],
        corurina: ['', Validators.required],
        odor: ['', Validators.required],
        frequencia: ['', Validators.required],
        urgencia: ['', Validators.required],
      }),
      corrimento: [''],
      disuria: [''],
      atividadesexual: [''],
      genital: [this.genital_feminino.value || this.genital_masculino.value]
    });
  }

  checkIsFem() {
    return true;
  }

  checkIsMasc() {
    return true;
  }

  private checkCorrimento() {
    if (this.genitourinario) {
      // Agora você pode acessar a propriedade 'corrimento' do FormGroup
      const corrimentoValue = this.genitourinario.value;
      return corrimentoValue === 'presente';
    } else {
      return false;
    }
  }
}
