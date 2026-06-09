import { getRoupas } from "../repository/cadastro-roupas.js";
import { get } from "../repository/session.js";

const container = document.getElementById("lista-roupas");
const searchInput = document.getElementById("site-search");
const categoryCards = document.querySelectorAll(".category-card");
const resultados = document.getElementById("catalog-results");
const limparBtn = document.getElementById("limpar-filtros");
const contador = document.getElementById("catalog-count");

let categoriaSelecionada = "";
let termoBusca = "";

function renderizarCards(roupas) {
    container.innerHTML = ""; // Limpa o container antes de renderizar de novo

    if (roupas.length === 0) {
        container.innerHTML = "<p>Nenhuma roupa encontrada.</p>";
        return;
    }

    roupas.forEach((roupa) => {
        const card = document.createElement("article");
        card.className = "card";

        const precoFormatado = Number(roupa.preco).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });

        card.innerHTML = `
        <img src="${roupa.imagens?.[0] ?? ''}" alt="${roupa.nome}" style="width: 100%; height: 150px; object-fit: contain; border-radius: 8px 8px 0 0;" >
        <h3>${roupa.nome}</h3>
        <p>${roupa.categoria} | ${roupa.tamanho} | ${roupa.cor}</p>
        <p>${precoFormatado}</p>
        <p>${roupa.descricao}</p>
        `;

        container.appendChild(card);
    });
}

function aplicarFiltros() {
    const termo = termoBusca.trim().toLowerCase();

    const resultado = getRoupas().filter((roupa) => {
        const correspondeCategoria =
            !categoriaSelecionada || roupa.categoria === categoriaSelecionada;

        const correspondeBusca =
            !termo ||
            [roupa.nome, roupa.cor, roupa.tamanho, roupa.descricao]
                .filter(Boolean)
                .some((campo) => campo.toLowerCase().includes(termo));

        return correspondeCategoria && correspondeBusca;
    });

    if (limparBtn) {
        limparBtn.hidden = !categoriaSelecionada && !termoBusca;
    }

    if (contador) {
        const n = resultado.length;
        contador.textContent =
            n === 0
                ? "Nenhuma peça encontrada"
                : `${n} ${n === 1 ? "peça" : "peças"}`;
    }

    renderizarCards(resultado);
}

function limparFiltros() {
    categoriaSelecionada = "";
    termoBusca = "";

    if (searchInput) {
        searchInput.value = "";
    }

    categoryCards.forEach((c) =>
        c.classList.remove("category-card--active")
    );

    aplicarFiltros();
}

if (get()) {

    if (resultados) {
        resultados.hidden = false;
    }

    categoryCards.forEach((card) => {
        card.addEventListener("click", (e) => {
            e.preventDefault();

            const categoria = card.dataset.categoria;

            if (categoriaSelecionada === categoria) {
                categoriaSelecionada = "";
            } else {
                categoriaSelecionada = categoria;
            }

            categoryCards.forEach((c) =>
                c.classList.toggle(
                    "category-card--active",
                    c.dataset.categoria === categoriaSelecionada
                )
            );

            aplicarFiltros();
        });
    });

    if (searchInput) {
        searchInput.addEventListener("input", () => {
            termoBusca = searchInput.value;
            aplicarFiltros();
        });
    }

    if (limparBtn) {
        limparBtn.addEventListener("click", limparFiltros);
    }

    aplicarFiltros();
}
