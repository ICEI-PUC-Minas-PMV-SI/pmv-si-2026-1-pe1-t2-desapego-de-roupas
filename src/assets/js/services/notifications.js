import {
    saveNotification,
    getNotificationsBySeller,
    deleteNotification
} from "../repository/notifications.js";

import { get } from "../repository/session.js";

export function notificarInteresse(roupa) {
    const usuario = get();

    if (!usuario) {
        return {
            ok: false,
            error: "Você precisa estar logado para demonstrar interesse."
        };
    }

    if (roupa.vendedorId === usuario.id) {
        return {
            ok: false,
            error: "Esta peça é sua."
        };
    }

    saveNotification({
        sellerId: roupa.vendedorId,
        roupaId: roupa.id,
        roupaNome: roupa.nome,
        interessadoNome: usuario.nome,
        interessadoEmail: usuario.email
    });

    return { ok: true };
}

export function getMeusInteresses() {
    const usuario = get();

    if (!usuario) {
        return [];
    }

    return getNotificationsBySeller(usuario.id);
}

export function removerInteresse(id) {
    deleteNotification(id);
}
