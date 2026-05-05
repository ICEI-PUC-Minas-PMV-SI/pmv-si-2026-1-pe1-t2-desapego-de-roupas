

const STORAGE_KEY = "current_user";


export function save (user) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

export function get () {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
}

export function clear () {
    localStorage.removeItem(STORAGE_KEY);
}
