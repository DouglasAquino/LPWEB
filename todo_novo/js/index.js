var botao = document.querySelector('#salvar');

botao.addEventListener('click', function(event){
    var pendentes = document.querySelector('#pendentes');
    var completas = document.querySelector('#completas');



    var li = document.createElement('li'); //criando um li
    var inputTexto = document.querySelector('#nova-tarefa');

    var checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.name = 'tarefas';
    checkBox.addEventListener('change', function(){

        var botoes = checkBox.parentElement.querySelectorAll('button');
        botoes.forEach(function(btn){
            btn.remove();
        });
        /*
        for(var i = 0; i < botoes.length; i++){
            botoes[i].remove();
        }
        //checkBox.parentElement.childNodes[3].remove();
        //checkBox.parentElement.childNodes[2].remove();
        */
        completas.appendChild(checkBox.parentElement)


    });

    var botaoDelete = document.createElement('button'); //botao deletar
    botaoDelete.textContent = 'Remover'; //dar nome ao botão
    botaoDelete.name = 'delete';
    botaoDelete.addEventListener('click', function(){
        pendentes.removeChild(botaoDelete.parentElement); // remover o li do botao clicado
    });


    var botaoEditar = document.createElement('button'); //botao editar
    botaoEditar.textContent = 'Editar'; //dar nome ao botão
    botaoEditar.name = 'edit';
    botaoEditar.addEventListener('click', function(){
        inputTexto.value = botaoEditar.parentElement.childNodes[1].textContent; // remover o li do botao clicado
        pendentes.removeChild(botaoEditar.parentElement);
    });

    li.appendChild(checkBox)
    li.append(inputTexto.value);
    li.appendChild(botaoEditar); //adicionar botao editar ao LI
    li.appendChild(botaoDelete); //adicionar o botão  ao LI
    pendentes.appendChild(li);

    inputTexto.value = ''; //limpar caixa de digitação

});