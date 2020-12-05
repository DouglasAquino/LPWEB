import { Injectable } from '@angular/core';
import { Disciplina } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class DisciplinasService {
  private disciplinas = null;
  private novoId = 1;

  constructor() {
    this.disciplinas = [];
  }

  todas(): Array<Disciplina> {
    return this.disciplinas;
  }

  salvar(id: number, titulo: string, descricao: string): Disciplina {
    if (id) {
      let d = this.encontrar(id);
      if (d) {
        d.titulo = titulo;
        d.descricao = descricao;
      } else {
        throw new Error('Não foi possível encontrar a disciplina');
      }
      return d;

    } else {
      const d = new Disciplina(this.novoId, titulo, descricao);
      console.log(d);
      this.disciplinas.push(d);
      this.novoId++;
      return d;
    }
  }

  excluir(disciplina: number | Disciplina) {
    let d = null;
    if (typeof(disciplina) === 'number') {
      d = this.encontrar(disciplina);
    } else {
      d = this.encontrar(disciplina.id);
    }
    if (d) {
      const i = this.disciplinas.indexOf(d);
      this.disciplinas.splice(i, 1);
    } else {
      throw new Error('Não foi possível encontrar a disciplina');
    }
  }

  encontrar(arg: number | string) {
    let d = null;
    if (typeof(arg) === 'number') {
      d = this.disciplinas.filter(d => d.id === arg);
    } else {
      d = this.disciplinas.filter(d => d.nome === arg);
    }
    if (d != null && d.length > 0) {
      return d[0];
    } else {
      return null;
    }
  }

}
