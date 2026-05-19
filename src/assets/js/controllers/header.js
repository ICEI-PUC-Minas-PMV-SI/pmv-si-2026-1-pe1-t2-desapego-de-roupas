
import * as session from "../repository/session.js";


const user = session.get();


if (user) {
    document.getElementById("nav-register").hidden = true;
    document.getElementById("nav-login").hidden = true;

    const username = document.getElementById("nav-username");
    username.textContent = user.nome;
    username.hidden = false;

    if (user.vendedor) {
        document.getElementById("nav-seller-badge").hidden = false;
    } else {
        document.getElementById("nav-become-seller").hidden = false;
    }

    const userMenu = document.getElementById("user-menu");
    userMenu.hidden = false;

    const avatar = document.getElementById("nav-avatar");
    const panel = document.getElementById("user-menu-panel");

    avatar.addEventListener("click", () => {
        const willOpen = panel.hidden;
        panel.hidden = !willOpen;
        avatar.setAttribute("aria-expanded", String(willOpen));
    });

    document.addEventListener("click", (e) => {
        if (!userMenu.contains(e.target)) {
            panel.hidden = true;
            avatar.setAttribute("aria-expanded", "false");
        }
    });

    document.getElementById("nav-logout").addEventListener("click", () => {
        session.clear();
        window.location.reload();
    });
}
