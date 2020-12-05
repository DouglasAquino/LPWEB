import { createAttribute, createComponent } from '@angular/compiler/src/core';
import { Component } from '@angular/core';
import { Formulario } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Formulario';
  pergunta = null;
  respCerta = null;
  respErradas = [];
  perguntas=[new Formulario('Qual melhor anime??','One Piece',['naruto','Fairy Tail'])];
  num = 1;
  salvar(){
    let alternativas = document.querySelectorAll("#rbAlternativas");
    //console.log(alternativas);
    for(let x = 0;x<alternativas.length;x++){
      if(alternativas[x]["checked"]){
        this.respCerta=alternativas[x].parentElement["childNodes"][3]["value"];
      }else{
        this.respErradas.push(alternativas[x].parentElement["childNodes"][3]["value"]);
      }
    }
    const perg = new Formulario(this.pergunta,this.respCerta,this.respErradas);
    this.perguntas.push(perg);
    this.respCerta = null;
    this.respErradas = [];
    this.pergunta=null;
    this.cancelar();
  }
  cancelar(){
    this.pergunta = null;
    this.num = 1;
    var inp = document.querySelector("#inputs");
    for(let x = inp["childNodes"]["length"]-1;x>=0;x-=1){
      inp["childNodes"][x].remove();
    }
    
  }
  addAlter(){
    let f = document.querySelector("#inputs");
    let a = document.createElement('div');
    let check = document.createElement('input');
    let i = document.createElement('input');
    let x = document.createElement('label');
    check["type"]="radio";
    check["id"]="rbAlternativas";
    check["name"]="alternativas";
    x["textContent"]= "Alternativa "+this.num;
    a["className"]="form-group";
    i["className"]="form-control";
    i["name"]="newAlter";
    a.appendChild(check);
    a.append(" ");
    a.appendChild(x);
    a.appendChild(i);
    f.appendChild(a);
    this.num+=1;
  }
  responder(item,verif){
    let indice = this.perguntas.indexOf(item);
    let msgs = document.querySelectorAll('#msg');
    //console.log(msgs.item(indice));
    if(verif == 'certa'){
      msgs.item(indice)["className"]="alert alert-success";
      msgs.item(indice)['textContent']="Resposta Correta!!"
    }else{
      msgs.item(indice)["className"]="alert alert-danger";
      msgs.item(indice)['textContent']="Resposta Incorreta!!"
    }
  }
}
