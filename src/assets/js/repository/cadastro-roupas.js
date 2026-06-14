import { generateUUID } from "../utils/utils.js";

const STORAGE_KEY = "roupas";

export function getRoupas() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function getRoupaById(id) {
    return getRoupas().find((roupa) => roupa.id === id) || null;
}

function persist(roupas) {
    try {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(roupas)
        );
    } catch (error) {
        throw new Error(
            "Não foi possível salvar: armazenamento cheio. " +
            "Tente usar imagens menores ou remover algumas roupas."
        );
    }
}

export function saveRoupa(roupa) {
    const roupas = getRoupas();
    const withId = { ...roupa, id: generateUUID() };

    roupas.push(withId);
    persist(roupas);

    return withId;
}

export function updateRoupa(roupa) {
    const roupas = getRoupas();
    const index = roupas.findIndex((r) => r.id === roupa.id);

    if (index === -1) {
        return null;
    }

    roupas[index] = roupa;
    persist(roupas);

    return roupa;
}

export function deleteRoupa(id) {
    const roupas = getRoupas().filter((roupa) => roupa.id !== id);

    persist(roupas);
}
