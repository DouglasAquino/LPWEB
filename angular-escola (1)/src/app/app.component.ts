import { DisciplinasService } from './disciplinas.service';
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
  editandoDisciplina = {id: 0, titulo: '', descricao: ''};
  disciplinas = [];
  salvo = false;

  constructor(private disciplinasService: DisciplinasService){
    this.disciplinas = this.disciplinasService.todas();
  }

  salvar(): void{
    this.editandoDisciplina.titulo = this.titulo;
    this.editandoDisciplina.descricao = this.descricao;

    this.disciplinasService.salvar(this.editandoDisciplina.id, this.editandoDisciplina.titulo, this.editandoDisciplina.descricao);

    this.titulo = '';
    this.descricao = '';
    this.editandoDisciplina = {id: 0, titulo: '', descricao: ''};
  }

  excluir(disciplina): void{
    if (this.editandoDisciplina === disciplina){
      alert('Não é possivel deletar disciplina em edição');
    }else{
      if (confirm('Tem certeza que deseja excluir a disciplina?')) {
        this.disciplinasService.excluir(disciplina);
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
