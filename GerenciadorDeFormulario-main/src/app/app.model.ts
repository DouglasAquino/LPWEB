export class Formulario{
    pergunta:string;
    respostaCerta:String;
    respostasErradas:Array<String>;
    constructor(pergunta:string,respostaCerta:string,respostasErradas:Array<String>){
        this.pergunta = pergunta;
        this.respostaCerta = respostaCerta;
        this.respostasErradas = respostasErradas;
    }
}