import { generateUUID } from "../utils/utils.js";

const STORAGE_KEY = "notifications";

export function getNotifications() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function getNotificationsBySeller(sellerId) {
    return getNotifications().filter((n) => n.sellerId === sellerId);
}

export function saveNotification(notification) {
    const notifications = getNotifications();
    const withId = { ...notification, id: generateUUID() };

    notifications.push(withId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notifications));

    return withId;
}

export function deleteNotification(id) {
    const notifications = getNotifications().filter((n) => n.id !== id);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(notifications));
}
