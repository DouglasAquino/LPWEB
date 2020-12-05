var botao = document.querySelector('#addTarefa');
var exec = document.querySelector('#executar');
var excluir = document.querySelector('#excluir');
var editar = document.querySelector('#editar');

editar.addEventListener('click', function(event){
    event.preventDefault();
    var pendente = document.querySelector('#pendentes');
    var pend = pendente.querySelectorAll('li');
    var text = document.querySelector('#editar');

    for (var i = 0; i < pend.length; i++) {
        if (pend[i].childNodes[1].checked){
            console.log(text, text.value);
            pend[1].childNodes[2].textContent = '' + text.value;
            text.value = "";
            

            
        };
    };

});


excluir.addEventListener('click', function(event){
    event.preventDefault();
    var pendente = document.querySelector('#pendentes');
    var pend = pendente.querySelectorAll('li');
    for (var i = 0; i < pend.length; i++) {
        if (pend[i].childNodes[1].checked){
            pendente.removeChild(pend[i]);
        };
    };

});

exec.addEventListener('click', function (event) {
    event.preventDefault();
    var pendente = document.querySelector("#pendentes")
    var pend = pendente.querySelectorAll('li');
    var completa = document.querySelector('#completas');

    for (var i = 0; i < pend.length; i++) {
        if (pend[i].childNodes[1].checked){
            var tare = document.createElement('li');
            tare.append(pend[i])
            completa.append(tare)
        };
    };
});


botao.addEventListener('click', function (event) {
    event.preventDefault();

    var tarefa = document.querySelector('#nova-tarefa');
    var tar = tarefa.value;
    var pendentes = document.querySelector("#pendentes");

    var linha = document.createElement("li");
    var tarefaTr = document.createElement("input");
    tarefaTr.type = "checkbox";
    tarefaTr.name = "tarefas";
    linha.append(' ');
    linha.appendChild(tarefaTr);
    linha.append(" " + tar);

    pendentes.appendChild(linha);

});