const inputItem = document.getElementById("input-item")
const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");
let contador = 0;

botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();

    if (inputItem.value.trim() === "") {
        alert("Por favor, insira um item!");
        return;
    }

    const itemDaLista = document.createElement("li");

    // Container principal com checkbox + nome do item
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");

    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador;

    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;
    nomeItem.id = "nome-item-" + contador;

    inputCheckbox.addEventListener("click", () => {
        nomeItem.style.textDecoration = inputCheckbox.checked ? "line-through" : "none";
    });

    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);

    // Botões de ação
    const botoesContainer = document.createElement("div");

    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("item-lista-button");
    botaoEditar.innerHTML = `<img src="assets/edit.svg" alt="Editar" />`;
    botaoEditar.addEventListener("click", () => {
        const novoTexto = prompt("Editar item:", nomeItem.innerText);
        if (novoTexto !== null && novoTexto.trim() !== "") {
            nomeItem.innerText = novoTexto.trim();
        }
    });

    const botaoExcluir = document.createElement("button");
    botaoExcluir.classList.add("item-lista-button");
    botaoExcluir.innerHTML = `<img src="assets/delete.svg" alt="Excluir" />`;
    botaoExcluir.addEventListener("click", () => {
        listaDeCompras.removeChild(itemDaLista);
    });

    botoesContainer.appendChild(botaoEditar);
    botoesContainer.appendChild(botaoExcluir);

    containerItemDaLista.appendChild(botoesContainer);
    itemDaLista.appendChild(containerItemDaLista);

    // Data e hora
    const data = new Date();
    const dataCompleta = `${data.toLocaleDateString("pt-BR", { weekday: "long" })} (${data.toLocaleDateString("pt-BR")}) às ${data.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}`;

    const itemData = document.createElement("p");
    itemData.innerText = dataCompleta;
    itemData.classList.add("texto-data");

    itemDaLista.appendChild(itemData);
    listaDeCompras.appendChild(itemDaLista);

    inputItem.value = "";
    contador++;
});
