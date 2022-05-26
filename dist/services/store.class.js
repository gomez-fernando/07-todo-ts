import { TASKS } from '../models/data.js';
export class StoreClass {
    store;
    constructor() {
        this.store = 'Tasks';
    }
    getTasks() {
        return localStorage.getItem(this.store)
            ? JSON.parse(localStorage.getItem(this.store))
            : TASKS;
    }
    setTasks(tasks) {
        localStorage.setItem(this.store, JSON.stringify(tasks));
    }
    deleteTasks() {
        localStorage.removeItem(this.store);
    }
}
