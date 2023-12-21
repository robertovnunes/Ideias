import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatSelect, MatSelectModule} from '@angular/material/select';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatOption, MatOptionModule } from '@angular/material/core';
import { OpcoesService } from '../../services/opcoes.service';

@Component({
  selector: 'app-alimentacao',
  templateUrl: './alimentacao.component.html',
  styleUrls: ['./alimentacao.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule]
})
export class AlimentacaoComponent implements OnInit {

  alimentacao!: FormGroup;
  constructor(private fb: FormBuilder,
              readonly opcoesService: OpcoesService) { }

  ngOnInit() {
    this.alimentacao = this.fb.group({
      aleitamentoMaterno: this.fb.group(
        {
          exclusivo: [''],
          periodo: [''],
          motivodesmame: ['']
        }
      ),
      iniciomista: [''],
      inicioartificial: [''],
      iniciosolidos: [''],
      dietaatual: this.fb.group({
        cereais: [''],
        vegetais: [''],
        carnes: [''],
        ovos: [''],
        frutas: ['']
      }),
      qtdrefeicoes: [''],
      horarios: [''],
      diluicaocarboidratos: [''],
      tecnicas: this.fb.group({
        mamadeira: [''],
        colher: [''],
        copo: [''],
        liquidificador: [''],
        comidapastosa: [''],
        chantagemafetiva: [''],
        brincadeiras: [''],
        outros: ['']
      }),
  });
  }
}
