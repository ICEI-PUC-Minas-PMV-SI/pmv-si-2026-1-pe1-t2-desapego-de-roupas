
import * as session from "../repository/session.js";

function show(id) {
    const el = document.getElementById(id);
    if (el) el.hidden = false;
    return el;
}

function hide(id) {
    const el = document.getElementById(id);
    if (el) el.hidden = true;
    return el;
}


const user = session.get();


if (user) {
    hide("nav-register");
    hide("nav-login");

    const username = document.getElementById("nav-username");
    if (username) {
        username.textContent = user.nome;
        username.hidden = false;
    }

    if (user.vendedor) {
        show("nav-seller-badge");
        show("nav-register-clothes");
    } else {
        show("nav-become-seller");
    }

    const userMenu = show("user-menu");

    const avatar = document.getElementById("nav-avatar");
    const panel = document.getElementById("user-menu-panel");

    const avatarImg = document.getElementById("nav-avatar-img");
    if (avatarImg) {
        avatarImg.src =
            "../assets/img/avatars/" + (user.avatar ?? "avatar-1.svg");
    }

    if (avatar && panel) {
        avatar.addEventListener("click", () => {
            const willOpen = panel.hidden;
            panel.hidden = !willOpen;
            avatar.setAttribute("aria-expanded", String(willOpen));
        });

        document.addEventListener("click", (e) => {
            if (userMenu && !userMenu.contains(e.target)) {
                panel.hidden = true;
                avatar.setAttribute("aria-expanded", "false");
            }
        });
    }

    const logout = document.getElementById("nav-logout");
    if (logout) {
        logout.addEventListener("click", () => {
            session.clear();
            window.location.reload();
        });
    }
}
