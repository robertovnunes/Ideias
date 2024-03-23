import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crescimentodesenvolvimento',
  templateUrl: './crescimentodesenvolvimento.component.html',
  styleUrls: ['./crescimentodesenvolvimento.component.css']
})
export class CrescimentodesenvolvimentoComponent implements OnInit {

  crescdes!: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.crescdes = this.formBuilder.group({
        idade_que: this.formBuilder.group({
          sustentou_a_cabeca: [''],
          sentou: [''],
          andou_solto: [''],
          falou_primeiras_palavras: ['']
        }),
        como_parece_em_relacao_aos_irmaos: [''],
        com_que_idade_foi_a_escola: [''],
        como_e_o_aprendizado: [''],
        houve_repeticao_de_ano: [false],
        como_e_o_relacionamento_com_colegas_e_professores: [''],
        particularidades_da_fala: [''],
        erupcao_e_mudanca_dentaria: [''],
        controle_dos_esfincteres: [''],
        regularidade_do_crescimento: [''],
        habitos: this.formBuilder.group({
        usa_chupeta: [false],
        chupa_dedo: [false],
        tiques: [false],
        alteracao_do_apetite: [false],
        enurese: [false],
        roi_unhas: [false],
        perturbacões_do_sono: [false],
        dorme_na_cama_dos_pais: [false]
      }),
      imunizacões: this.formBuilder.group({
        vacinacao_basica: [false],
        reforcos: [false],
        efeitos_colaterais: [''],
        teste_de_Mantoux: ['']
      }),
      doencas_anteriores: this.formBuilder.group({
        infecto_contagiosas: this.formBuilder.group({
          Coqueluche: [false],
          sarampo: [false],
          varicela: [false],
          parotidite: [false],
          difteria: [false],
          tetano: [false]
        }),
        diarreia: [false],
        pneumonia: [false],
        meningite: [false],
        febre_reumatica: [false],
        nefropatia: [false],
        tuberculose: [false],
        alergia: this.formBuilder.group({
          Asma: [false],
          eczema: [false],
          alimentar: [false]
        }),
        cirurgias_e_acidentes: this.formBuilder.group({
          natureza: [''],
          resultado: ['']
        }),
        historia_de_transfusões: [false],
        hospitalizacões: [0],
        tratamentos_realizados: this.formBuilder.array([])
      }),
      outras: this.formBuilder.group({
        lugares_habitados_pelo_paciente: this.formBuilder.array([]),
        banhos_de_rio_acude: [false],
        foi_picado_pelo_barbeiro: [false],
        exposicao_a_agentes_toxicos: this.formBuilder.array([]),
        reacões_a_soro_medicamento: this.formBuilder.group({
          sim: this.formBuilder.array([
            [false],
            this.formBuilder.group({
              quais: [''],
              quando: [''],
              tipo_duracao: ['']
            })
          ]),
          contato_com_tuberculose: [false]
        })
      })
    });
  }

}
