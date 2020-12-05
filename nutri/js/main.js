var pacientes = document.querySelectorAll('.paciente');
for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var pesoTd = paciente.querySelector('.info-peso');
    var alturaTd = paciente.querySelector('.info-altura');
    var imcTd = paciente.querySelector('.info-imc');

    var imc = calculaIMC(pesoTd.textContent, alturaTd.textContent);
    imcTd.textContent = imc;

    if(imcTd.textContent <= 20){
        paciente.classList.add('paciente-perigo');
    }
}

function calculaIMC(peso, altura){
    var imc = peso / (altura * altura);
    return imc.toFixed(0);
}

var botao = document.querySelector('#adicionar-paciente');

botao.addEventListener('click', function (event) {
    event.preventDefault();
    
    var form = document.querySelector('#form-paciente');
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculaIMC(peso, altura);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

});