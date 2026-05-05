

const STORAGE_KEY = "users";

const CURRENT_USER = "current_user";


export function getAll () {
    var users = localStorage.getItem(STORAGE_KEY);

    if (users) {
        return JSON.parse(users)
    }
    return []
}

export function findByEmail (email) {
    return getAll().find(u => u.email === email)
}