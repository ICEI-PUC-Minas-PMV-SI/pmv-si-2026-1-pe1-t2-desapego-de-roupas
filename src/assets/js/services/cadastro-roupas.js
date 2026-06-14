import {
    saveRoupa,
    getRoupaById,
    updateRoupa,
    deleteRoupa
} from "../repository/cadastro-roupas.js";

import { get } from "../repository/session.js";

function validar(data) {
    if (
        !data.nome ||
        !data.categoria ||
        !data.tamanho ||
        !data.cor ||
        !data.preco ||
        !data.descricao ||
        !data.imagens ||
        data.imagens.length === 0
    ) {
        throw new Error(
            "Preencha todos os campos."
        );
    }
}

export function cadastrarRoupa(data) {
    const usuario = get();

    if (!usuario) {
        throw new Error(
            "Você precisa estar logado para cadastrar peças."
        );
    }

    validar(data);

    return saveRoupa({ ...data, vendedorId: usuario.id });
}

export function atualizarRoupa(data) {
    const usuario = get();

    if (!usuario) {
        throw new Error(
            "Você precisa estar logado para editar peças."
        );
    }

    const existente = getRoupaById(data.id);

    if (!existente) {
        throw new Error("Peça não encontrada.");
    }

    if (existente.vendedorId !== usuario.id) {
        throw new Error("Você só pode editar peças que cadastrou.");
    }

    validar(data);

    return updateRoupa({ ...existente, ...data });
}

export function excluirRoupa(id) {
    const usuario = get();

    if (!usuario) {
        throw new Error(
            "Você precisa estar logado para excluir peças."
        );
    }

    const existente = getRoupaById(id);

    if (!existente) {
        throw new Error("Peça não encontrada.");
    }

    if (existente.vendedorId !== usuario.id) {
        throw new Error("Você só pode excluir peças que cadastrou.");
    }

    deleteRoupa(id);
}
