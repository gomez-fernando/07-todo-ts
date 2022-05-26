import { TASKS } from '../models/data.js';
const store = 'Tasks';
export function getTasks() {
    return localStorage.getItem(store)
        ? JSON.parse(localStorage.getItem(store))
        : TASKS;
}
export function setTasks(tasks) {
    localStorage.setItem(store, JSON.stringify(tasks));
}
export function deleteTasks() {
    localStorage.removeItem(store);
}
