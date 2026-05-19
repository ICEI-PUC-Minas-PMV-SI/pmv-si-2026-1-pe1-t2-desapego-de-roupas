
import { becomeSeller } from "../services/seller.js";
import * as session from "../repository/session.js";


const form = document.getElementById("seller-form");
const errorEl = document.getElementById("seller-error");


const currentUser = session.get();
if (currentUser) {
    form.nome.value = currentUser.nome ?? "";
    form.email.value = currentUser.email ?? "";
    form.tel.value = currentUser.telefone ?? "";
    form.cpf.value = currentUser.cpf ?? "";
    form.cidade.value = currentUser.cidade ?? "";

    if (currentUser.cpf) {
        form.cpf.disabled = true;
    }
}


document.getElementById("cpf").addEventListener("input", (e) => {
    let v = e.target.value.replace(/\D/g, "");
    if (v.length > 3) v = v.slice(0, 3) + "." + v.slice(3);
    if (v.length > 7) v = v.slice(0, 7) + "." + v.slice(7);
    if (v.length > 11) v = v.slice(0, 11) + "-" + v.slice(11);
    e.target.value = v.slice(0, 14);
});

document.getElementById("tel").addEventListener("input", (e) => {
    let v = e.target.value.replace(/\D/g, "");
    if (v.length > 0) v = "(" + v;
    if (v.length > 3) v = v.slice(0, 3) + ") " + v.slice(3);
    if (v.length > 10) v = v.slice(0, 10) + "-" + v.slice(10);
    e.target.value = v.slice(0, 15);
});


const select = document.getElementById("estado-select");
const trigger = select.querySelector(".select__trigger");
const valueEl = select.querySelector(".select__value");
const panel = select.querySelector(".select__panel");
const stateInput = document.getElementById("estado");

if (currentUser && currentUser.estado) {
    valueEl.textContent = currentUser.estado;
    valueEl.classList.remove("select__value--placeholder");
    stateInput.value = currentUser.estado;
}

trigger.addEventListener("click", () => {
    const willOpen = panel.hidden;
    panel.hidden = !willOpen;
    trigger.setAttribute("aria-expanded", String(willOpen));
});

panel.querySelectorAll(".select__option").forEach((option) => {
    option.addEventListener("click", () => {
        valueEl.textContent = option.dataset.value;
        valueEl.classList.remove("select__value--placeholder");
        stateInput.value = option.dataset.value;
        panel.hidden = true;
        trigger.setAttribute("aria-expanded", "false");
    });
});

document.addEventListener("click", (e) => {
    if (!select.contains(e.target)) {
        panel.hidden = true;
        trigger.setAttribute("aria-expanded", "false");
    }
});


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const result = becomeSeller({
        nome: form.nome.value,
        email: form.email.value,
        telefone: form.tel.value,
        cpf: form.cpf.value,
        cidade: form.cidade.value,
        estado: stateInput.value
    });

    if (result.ok) {
        window.location.href = "./index.html";
    } else {
        errorEl.textContent = result.error;
        errorEl.hidden = false;
    }
});
