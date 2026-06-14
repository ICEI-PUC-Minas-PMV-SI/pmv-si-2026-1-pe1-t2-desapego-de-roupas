import { getRoupas } from "../repository/cadastro-roupas.js";
import { get } from "../repository/session.js";
import { createRoupaCard } from "../components/roupa-card.js";
import { openRoupaModal } from "../components/roupa-modal.js";
import {
    getMeusInteresses,
    removerInteresse
} from "../services/notifications.js";

const usuario = get();

if (!usuario) {

    alert("Você precisa estar logado para ver suas peças.");

    window.location.href = "login.html";

} else if (!usuario.vendedor) {

    alert("Você precisa ser vendedor para ter peças cadastradas.");

    window.location.href = "profile.html";

} else {

    const container = document.getElementById("minhas-roupas");
    const contador = document.getElementById("minhas-count");

    function renderizar() {

        const minhasRoupas = getRoupas().filter(
            (roupa) => roupa.vendedorId === usuario.id
        );

        container.innerHTML = "";

        const n = minhasRoupas.length;

        contador.textContent =
            n === 0
                ? "Você ainda não cadastrou nenhuma peça."
                : `${n} ${n === 1 ? "peça cadastrada" : "peças cadastradas"}`;

        minhasRoupas.forEach((roupa) => {
            const card = createRoupaCard(roupa, (selecionada) =>
                openRoupaModal(selecionada, { onChange: renderizar })
            );

            container.appendChild(card);
        });
    }

    function renderizarInteresses() {

        const section = document.getElementById("interesses-section");
        const lista = document.getElementById("lista-interesses");
        const interesses = getMeusInteresses();

        lista.innerHTML = "";

        if (interesses.length === 0) {
            section.hidden = true;
            return;
        }

        section.hidden = false;

        interesses.forEach((interesse) => {

            const item = document.createElement("li");

            item.className = "interest-list__item";

            item.innerHTML = `
            <div>
                <p class="interest-list__title">
                    <strong>${interesse.interessadoNome}</strong> tem interesse em
                    <strong>${interesse.roupaNome}</strong>
                </p>
                <p class="interest-list__contact">
                    <i class="fa-solid fa-envelope" aria-hidden="true"></i>
                    ${interesse.interessadoEmail}
                </p>
            </div>
            <button type="button" class="btn btn--ghost btn--sm" aria-label="Remover interesse">
                <i class="fa-solid fa-xmark" aria-hidden="true"></i>
            </button>`;

            item
                .querySelector("button")
                .addEventListener("click", () => {
                    removerInteresse(interesse.id);
                    renderizarInteresses();
                });

            lista.appendChild(item);
        });
    }

    renderizarInteresses();
    renderizar();
}
