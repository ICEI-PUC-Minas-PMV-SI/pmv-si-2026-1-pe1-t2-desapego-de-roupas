

import { findByEmail } from "../repository/users.js";
import * as session from "../repository/session.js";


export function login (email, senha) {
    const user = findByEmail(email);

    if (!user || user.senha !== senha) {
        return { ok: false, error: "Email ou senha incorretos" };
    }

    session.save(user);
    return { ok: true, user };
}
