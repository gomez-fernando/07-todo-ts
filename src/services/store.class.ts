import { TASKS } from '../models/data.js';
import { TaskModel } from '../models/task.js';

export class StoreClass {
    store: string;
    constructor() {
        this.store = 'Tasks';
    }

    getTasks(): Array<TaskModel> {
        return localStorage.getItem(this.store)
            ? JSON.parse(<string>localStorage.getItem(this.store))
            : TASKS;
    }

    setTasks(tasks: Array<TaskModel>) {
        localStorage.setItem(this.store, JSON.stringify(tasks));
    }

    deleteTasks() {
        localStorage.removeItem(this.store);
    }
}
