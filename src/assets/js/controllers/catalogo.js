import { getRoupas } from "../repository/cadastro-roupas.js";

const container = document.getElementById("lista-roupas");

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

function buscar(categoriaSelecionada = "") {
    const roupas = getRoupas();
    const resultado = categoriaSelecionada
        ? roupas.filter(r => r.categoria === categoriaSelecionada)
        : roupas;

    renderizarCards(resultado);
}

buscar(); // Renderiza as roupas quando carregar a página

document.querySelectorAll(".category-card").forEach(card => {
    card.addEventListener("click", (e) => {
        e.preventDefault();
        buscar(card.dataset.category);
    });
});
