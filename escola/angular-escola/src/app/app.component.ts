import { Component } from '@angular/core';
import { Disciplina } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nome = null;
  descricao = null;

  disciplinas = [
    new Disciplina('Lingua Portuguesa','Estudo da Linguagem'),
    new Disciplina('Lingua Matemática','Calculos Númericos'),
    new Disciplina('Hitória','História do Brasil')
  ];

  salvar(){
    let d = new Disciplina(this.nome, this.descricao);
    this.disciplinas.push(d);
    this.nome = null;
    this.descricao = null;
  }
}
