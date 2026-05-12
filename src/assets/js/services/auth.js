

import { findByEmail, save } from "../repository/users.js";
import * as session from "../repository/session.js";


export function login (email, senha) {
    const user = findByEmail(email);

    if (!user || user.senha !== senha) {
        return { ok: false, error: "Email ou senha incorretos" };
    }

    session.save(user);
    return { ok: true, user };
}

export function register ({ nome, email, senha }) {
    if (!nome || !email || !senha) {
        return { ok: false, error: "Preencha todos os campos" };
    }

    if (findByEmail(email)) {
        return { ok: false, error: "Esse email já está cadastrado" };
    }

    const user = save({ nome, email, senha });
    session.save(user);

    return { ok: true, user };
}
