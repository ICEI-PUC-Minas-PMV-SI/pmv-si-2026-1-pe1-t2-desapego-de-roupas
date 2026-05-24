import { getRoupas } from "../repository/cadastro-roupas.js";

const container = document.querySelector(".container");
const filtroCat = document.getElementById("filtro-categoria");
const btnBuscar = document.querySelector("button");

function renderizarCards(roupas) {
    container.innerHTML = ""; // Limpa o container antes de renderizar de novo

roupas.forEach((roupa) => {
    const card = document.createElement("article");

    card.innerHTML = `
    <h3>${roupa.nome}</h3>
    <p>${roupa.categoria} | ${roupa.tamanho} | ${roupa.cor}</p>
    <p>R$ ${roupa.preco}</p>
    <p>${roupa.descricao}</p>
    `;

    container.appendChild(card);
});
}

function buscar() {
    const roupas = getRoupas();
    const categoriaSelecionada = filtroCat.value;

    const resultado = categoriaSelecionada
        ? roupas.filter(r => r.categoria === categoriaSelecionada)
        : roupas;

    renderizarCards(resultado);
}

buscar(); // Renderiza as roupas quando carregar a página

btnBuscar.addEventListener("click", buscar);  //Filtro quando clicar no botão de buscar