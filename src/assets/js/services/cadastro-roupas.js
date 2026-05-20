import {
    saveRoupa
} from "../repository/cadastro-roupas.js";

export function cadastrarRoupa(data) {

    if (
        !data.nome ||
        !data.categoria ||
        !data.tamanho ||
        !data.cor ||
        !data.preco ||
        !data.descricao
    ) {
        throw new Error(
            "Preencha todos os campos."
        );
    }

    saveRoupa(data);
}