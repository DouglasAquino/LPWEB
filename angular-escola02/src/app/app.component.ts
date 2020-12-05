import { Disciplina } from './app.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  titulo = null;
  descricao = null;
  editandoDisciplina: Disciplina = null;
  disciplinas = [];

  salvar(): void{
    if (this.editandoDisciplina){
      this.editandoDisciplina.titulo = this.titulo;
      this.editandoDisciplina.descricao = this.descricao;
    }else{
      const d = new Disciplina(this.titulo, this.descricao);
      this.disciplinas.push(d);
    }
    this.titulo = null;
    this.descricao = null;
    this.editandoDisciplina = null;
  }

  excluir(disciplina): void{
    if (this.editandoDisciplina === disciplina){
      alert('Não é possivel deletar disciplina em edição');
    }else{
      if (confirm('Tem certeza que deseja excluir a disciplina?')) {
        const indice = this.disciplinas.indexOf(disciplina);
        this.disciplinas.splice(indice, 1);
      }
    }
  }

  cancelar(): void{
    this.titulo = null;
    this.descricao = null;
    this.editandoDisciplina = null;
  }

  editar(disciplina): void{
    // preencho o formulario com os dados do item que está no array
    this.titulo = disciplina.titulo;
    this.descricao = disciplina.descricao;
    // criei um objeto de referência
    this.editandoDisciplina = disciplina;
  }

}
