
import { update } from "../repository/users.js";
import * as session from "../repository/session.js";


export function updateProfile (data) {
    const user = session.get();

    if (!user) {
        return { ok: false, error: "Você precisa estar logado" };
    }

    if (!data.nome) {
        return { ok: false, error: "Preencha o nome" };
    }

    const updated = { ...user, ...data };

    update(updated);
    session.save(updated);

    return { ok: true, user: updated };
}
