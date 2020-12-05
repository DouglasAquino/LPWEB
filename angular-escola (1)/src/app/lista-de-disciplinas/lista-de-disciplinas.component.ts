import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lista-de-disciplinas',
  templateUrl: './lista-de-disciplinas.component.html',
  styleUrls: ['./lista-de-disciplinas.component.css']
})
export class ListaDeDisciplinasComponent implements OnInit {

  @Input()
  lista_disciplinas = null;

  @Input()
  editandoDisciplina = null;

  @Output()
  onEditar = new EventEmitter<any>();

  @Output()
  onExcluir = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }

  editar(disciplina) {
    this.onEditar.emit(disciplina);
  }

  excluir(disciplina) {
    this.onExcluir.emit(disciplina);
  }

}
