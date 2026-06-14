export function formatarPreco(valor) {
    return Number(valor).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

export function createRoupaCard(roupa, onClick) {
    const card = document.createElement("article");
    card.className = "card card--clickable";
    card.dataset.id = roupa.id ?? "";
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");

    card.innerHTML = `
    <img src="${roupa.imagens?.[0] ?? ''}" alt="${roupa.nome}" style="width: 100%; height: 150px; object-fit: contain; border-radius: 8px 8px 0 0;">
    <h3>${roupa.nome}</h3>
    <p>${roupa.categoria} | ${roupa.tamanho} | ${roupa.cor}</p>
    <p>${formatarPreco(roupa.preco)}</p>
    <p>${roupa.descricao}</p>
    `;

    if (onClick) {
        card.addEventListener("click", () => onClick(roupa));
        card.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onClick(roupa);
            }
        });
    }

    return card;
}
