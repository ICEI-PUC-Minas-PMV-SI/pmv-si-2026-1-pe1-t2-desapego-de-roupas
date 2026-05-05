

import { seedIfEmpty } from "../seed.js";
import { login } from "../service/auth.js";


seedIfEmpty();


const form = document.getElementById("login-form");
const errorEl = document.getElementById("login-error");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = form.email.value;
    const senha = form.password.value;

    const result = login(email, senha);

    if (result.ok) {
        window.location.href = "../pages/index.html";
    } else {
        errorEl.textContent = result.error;
        errorEl.hidden = false;
    }
});
