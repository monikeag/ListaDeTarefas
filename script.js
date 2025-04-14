document.addEventListener("DOMContentLoaded", function () {
    //capturar o fomulário
    const form = document.getElementById("form");
    const lista = document.getElementById("listaTarefas");

    //Adicinar o evento de submit ao formulario
    form.addEventListener("submit", function (event) {
        event.preventDefault();


        //capturar os dados do formulario
        const tarefa = document.getElementById("tarefa").value;
        const prioridade = document.getElementById("prioridade").value;
        const status = document.getElementById("status").value;

        //Vai aparecer a lista que eu ciar
        const li = document.createElement("li");
        li.innerHTML = `<strong>${tarefa}</strong> `;

        li.setAttribute("data-prioridade", prioridade);
        li.setAttribute("data-status", status);


        //add na lista
        const lista = document.getElementById("listaTarefas");
        lista.appendChild(li);

        //limpar os campos do formulario assim que eu clicar no botão "Incluir tarefa"
        form.reset();


        console.log("tarefa: ", tarefa);
        console.log("prioridade: ", prioridade);
        console.log("status: ", status);


    })

})