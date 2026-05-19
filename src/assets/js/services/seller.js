
import { update } from "../repository/users.js";
import * as session from "../repository/session.js";


export function becomeSeller (data) {
    const user = session.get();

    if (!user) {
        return { ok: false, error: "Você precisa estar logado para se tornar vendedor" };
    }

    const { nome, email, telefone, cpf, cidade, estado } = data;

    if (!nome || !email || !telefone || !cpf || !cidade || !estado) {
        return { ok: false, error: "Preencha todos os campos" };
    }

    const updated = {
        ...user,
        nome,
        email,
        telefone,
        cpf,
        cidade,
        estado,
        vendedor: true
    };

    update(updated);
    session.save(updated);

    return { ok: true, user: updated };
}
