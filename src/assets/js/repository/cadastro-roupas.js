const STORAGE_KEY = "roupas";

export function getRoupas() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function saveRoupa(roupa) {
    const roupas = getRoupas();

    roupas.push(roupa);

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