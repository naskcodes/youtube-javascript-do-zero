let tarefas = [];
let divPrincipal = document.getElementById("container");
let botaoLimpar = document.createElement("button");

botaoLimpar.className = "botao_lista";
botaoLimpar.textContent = "Limpar lista";

function adicionarTarefa() {
    const inputTarefa = document.getElementById("inputTarefa");
    let tarefa = inputTarefa.value.trim();
    const mensagem = document.getElementById("mensagem");

    if (tarefa == "") {
        let mensagemErro = "Digite uma tarefa para adicioná-la a sua lista!";
    
        mensagem.textContent = mensagemErro;
        mensagem.style.color = "#A34743";
    } else {
        let mensagemSucesso = "Tarefa adicionada com sucesso!";
    
        mensagem.textContent = mensagemSucesso;
        mensagem.style.color = "#28A745";
        tarefas.push(tarefa);
        renderizarTarefas();
    }
    
    inputTarefa.value = "";
}

function renderizarTarefas() {
    const listaTarefas = document.getElementById("listaTarefas");
    
    listaTarefas.innerHTML = "";

    for(let i = 0; i < tarefas.length; i++) {
        let novaTarefa = document.createElement("li");
        
        novaTarefa.textContent = tarefas[i];

        let botaoRemover = document.createElement("button");
        let botaoEditar = document.createElement("button");

        botaoRemover.className = "remover";
        botaoRemover.textContent = "Remover";
        botaoRemover.onclick = () => removerTarefa(i);
        botaoEditar.className = "editar";
        botaoEditar.textContent = "Editar";
        botaoEditar.onclick = () => editarTarefa(i);
        if (tarefas.length > 0) {
            botaoLimpar.removeAttribute('hidden');
            botaoLimpar.onclick = () => limparLista();
            divPrincipal.appendChild(botaoLimpar);
        }
        novaTarefa.appendChild(botaoRemover);
        novaTarefa.appendChild(botaoEditar);
        listaTarefas.appendChild(novaTarefa);
    }

}

function removerTarefa(i) {
    tarefas.splice(i, 1);
    renderizarTarefas();
}

function editarTarefa(i) {
    let tarefaEditada = prompt("Edite a tarefa:");
    if (tarefaEditada.trim() !== "") {
        tarefas[i] = tarefaEditada;
        renderizarTarefas();
    }
}

//<button onclick="limparLista()" class="botao_lista">Limpar</button>

function limparLista() {
    tarefas.length = 0;
    renderizarTarefas();
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = "Lista zerada com sucesso!";
    botaoLimpar.toggleAttribute('hidden');
}