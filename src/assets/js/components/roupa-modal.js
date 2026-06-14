import { get } from "../repository/session.js";
import { findById } from "../repository/users.js";
import { excluirRoupa } from "../services/cadastro-roupas.js";
import { notificarInteresse } from "../services/notifications.js";
import { formatarPreco } from "./roupa-card.js";

let overlay = null;
let dialog = null;

function ensureModal() {
    if (overlay) {
        return;
    }

    overlay = document.createElement("div");
    overlay.className = "modal";
    overlay.hidden = true;

    dialog = document.createElement("div");
    dialog.className = "modal__dialog";
    dialog.setAttribute("role", "dialog");
    dialog.setAttribute("aria-modal", "true");

    overlay.appendChild(dialog);
    document.body.appendChild(overlay);

    overlay.addEventListener("click", (event) => {
        if (event.target === overlay) {
            closeModal();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !overlay.hidden) {
            closeModal();
        }
    });
}

function closeModal() {
    if (overlay) {
        overlay.hidden = true;
        dialog.innerHTML = "";
    }
}

function renderVendedor(vendedorId) {
    const vendedor = vendedorId ? findById(vendedorId) : null;

    if (!vendedor) {
        return `
        <div class="modal__seller">
            <h3 class="modal__seller-title">Vendedor</h3>
            <p>Informações do vendedor indisponíveis.</p>
        </div>`;
    }

    const linhas = [
        `<p><strong>Nome:</strong> ${vendedor.nome ?? "—"}</p>`
    ];

    if (vendedor.telefone) {
        linhas.push(`<p><strong>Telefone:</strong> ${vendedor.telefone}</p>`);
    }

    if (vendedor.cidade || vendedor.estado) {
        const local = [vendedor.cidade, vendedor.estado]
            .filter(Boolean)
            .join(" - ");
        linhas.push(`<p><strong>Localização:</strong> ${local}</p>`);
    }

    return `
    <div class="modal__seller">
        <h3 class="modal__seller-title">Vendedor</h3>
        ${linhas.join("")}
        <p class="modal__seller-hint">
            Combine um encontro em local público e movimentado.
        </p>
    </div>`;
}

export function openRoupaModal(roupa, options = {}) {
    ensureModal();

    const usuario = get();
    const isOwner =
        usuario && roupa.vendedorId && roupa.vendedorId === usuario.id;

    const galeria = (roupa.imagens ?? [])
        .map(
            (img) =>
                `<img class="modal__image" src="${img}" alt="${roupa.nome}">`
        )
        .join("");

    const acoes = isOwner
        ? `
        <a class="btn btn--secondary" href="cadastro-roupas.html?id=${roupa.id}">
            <i class="fa-solid fa-pen" aria-hidden="true"></i> Editar
        </a>
        <button type="button" class="btn btn--danger" id="modal-delete">
            <i class="fa-solid fa-trash" aria-hidden="true"></i> Excluir
        </button>`
        : `
        <button type="button" class="btn btn--primary" id="modal-interest">
            <i class="fa-solid fa-hand-point-up" aria-hidden="true"></i> Tenho interesse
        </button>`;

    dialog.innerHTML = `
    <button type="button" class="modal__close" id="modal-close" aria-label="Fechar">
        <i class="fa-solid fa-xmark" aria-hidden="true"></i>
    </button>

    <div class="modal__gallery">${galeria}</div>

    <h2 class="modal__title">${roupa.nome}</h2>
    <p class="modal__meta">${roupa.categoria} | ${roupa.tamanho} | ${roupa.cor}</p>
    <p class="modal__price">${formatarPreco(roupa.preco)}</p>
    <p class="modal__description">${roupa.descricao}</p>

    ${renderVendedor(roupa.vendedorId)}

    <p class="form-error" id="modal-error" role="alert" hidden></p>
    <div class="modal__actions">${acoes}</div>`;

    dialog
        .querySelector("#modal-close")
        .addEventListener("click", closeModal);

    if (isOwner) {
        dialog
            .querySelector("#modal-delete")
            .addEventListener("click", () => {
                const confirmar = window.confirm(
                    "Tem certeza que deseja excluir esta peça?"
                );

                if (!confirmar) {
                    return;
                }

                try {
                    excluirRoupa(roupa.id);
                    closeModal();
                    options.onChange?.();
                } catch (error) {
                    mostrarErro(error.message);
                }
            });
    } else {
        dialog
            .querySelector("#modal-interest")
            .addEventListener("click", (event) => {
                const result = notificarInteresse(roupa);

                if (result.ok) {
                    event.target.closest(".modal__actions").innerHTML =
                        `<p class="modal__success">
                            <i class="fa-solid fa-circle-check" aria-hidden="true"></i>
                            Interesse enviado! O vendedor verá seu contato.
                        </p>`;
                } else {
                    mostrarErro(result.error);
                }
            });
    }

    overlay.hidden = false;
}

function mostrarErro(mensagem) {
    const erro = dialog.querySelector("#modal-error");

    if (erro) {
        erro.textContent = mensagem;
        erro.hidden = false;
    }
}
