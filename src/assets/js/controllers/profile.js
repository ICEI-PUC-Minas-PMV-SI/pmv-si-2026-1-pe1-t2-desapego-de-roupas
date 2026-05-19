
import { updateProfile } from "../services/profile.js";
import * as session from "../repository/session.js";


const AVATAR_PATH = "../assets/img/avatars/";
const DEFAULT_AVATAR = "avatar-1.svg";


const user = session.get();

if (!user) {
    window.location.href = "./login.html";
} else {
    const form = document.getElementById("profile-form");
    const errorEl = document.getElementById("profile-error");
    const photo = document.getElementById("profile-photo");

    document.getElementById("profile-name").textContent = user.nome ?? "";
    document.getElementById("profile-email").textContent = user.email ?? "";

    form.nome.value = user.nome ?? "";

    let selectedAvatar = user.avatar ?? DEFAULT_AVATAR;
    photo.src = AVATAR_PATH + selectedAvatar;

    const options = document.querySelectorAll(".avatar-picker__option");
    options.forEach((option) => {
        if (option.dataset.avatar === selectedAvatar) {
            option.classList.add("avatar-picker__option--selected");
        }

        option.addEventListener("click", () => {
            selectedAvatar = option.dataset.avatar;
            photo.src = AVATAR_PATH + selectedAvatar;
            options.forEach((o) => o.classList.remove("avatar-picker__option--selected"));
            option.classList.add("avatar-picker__option--selected");
        });
    });

    if (user.vendedor) {
        document.getElementById("profile-seller-tag").hidden = false;
        document.getElementById("seller-tel").textContent = user.telefone ?? "";
        document.getElementById("seller-cpf").textContent = user.cpf ?? "";
        document.getElementById("seller-cidade").textContent = user.cidade ?? "";
        document.getElementById("seller-estado").textContent = user.estado ?? "";
        document.getElementById("seller-info").hidden = false;
    } else {
        document.getElementById("not-seller").hidden = false;
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const result = updateProfile({
            nome: form.nome.value,
            avatar: selectedAvatar
        });

        if (result.ok) {
            window.location.reload();
        } else {
            errorEl.textContent = result.error;
            errorEl.hidden = false;
        }
    });
}
