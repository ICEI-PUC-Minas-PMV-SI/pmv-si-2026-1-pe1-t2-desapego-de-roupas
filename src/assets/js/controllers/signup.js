

import { seedIfEmpty } from "../seed.js";
import { register } from "../services/auth.js";


seedIfEmpty();


const form = document.getElementById("signup-form");
const errorEl = document.getElementById("signup-error");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = form.nome.value;
    const email = form.email.value;
    const senha = form.password.value;

    const result = register({ nome, email, senha });

    if (result.ok) {
        window.location.href = "./index.html";
    } else {
        errorEl.textContent = result.error;
        errorEl.hidden = false;
    }
});
