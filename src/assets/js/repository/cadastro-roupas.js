const STORAGE_KEY = "roupas";

export function getRoupas() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function saveRoupa(roupa) {
    const roupas = getRoupas();

    roupas.push(roupa);

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(roupas)
    );
}