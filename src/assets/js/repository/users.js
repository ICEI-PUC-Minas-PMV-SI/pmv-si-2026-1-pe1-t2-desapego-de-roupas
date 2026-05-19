
import { generateUUID } from "../utils/utils.js";


export const STORAGE_KEY = "users";


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

export function save (user) {
    const users = getAll();
    const withId = { ...user, id: generateUUID() };

    users.push(withId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));

    return withId;
}

export function update (user) {
    const users = getAll();
    const index = users.findIndex(u => u.id === user.id);

    if (index === -1) {
        return null;
    }

    users[index] = user;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));

    return user;
}
