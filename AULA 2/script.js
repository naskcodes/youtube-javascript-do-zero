function adicionarTarefa() {
    let mensagem = "Tarefa adicionada com sucesso!";
    let inputTarefa = document.getElementById("inputTarefa");
    let tarefa = inputTarefa.value;
    let listaTarefas = document.getElementById("listaTarefas");
    let novaTarefa = document.createElement("li");
    
    document.getElementById("mensagem").textContent = mensagem;
    novaTarefa.textContent = tarefa;
    listaTarefas.appendChild(novaTarefa);
    inputTarefa.value = "";
}