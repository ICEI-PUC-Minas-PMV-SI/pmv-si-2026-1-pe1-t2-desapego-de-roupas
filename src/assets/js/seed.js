import { STORAGE_KEY, getAll } from "./repository/users.js";
import { generateUUID } from "./utils/utils.js";


const initialSeed = {
    users: [
        { "id": generateUUID (), "login": "admin", "senha": "123", "nome": "Administrador do Sistema", "email": "admin@abc.com"},
    ]
};


export function seedIfEmpty () {
    if (localStorage.getItem(STORAGE_KEY) === null) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(initialSeed.users));
    }
}