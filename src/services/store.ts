import { TASKS } from '../models/data.js';
import { TaskModel } from '../models/task.js';

const store = 'Tasks';

export function getTasks(): Array<TaskModel> {
    return localStorage.getItem(store)
        ? JSON.parse(<string>localStorage.getItem(store))
        : TASKS;
}

export function setTasks(tasks: Array<TaskModel>) {
    localStorage.setItem(store, JSON.stringify(tasks));
}

export function deleteTasks() {
    localStorage.removeItem(store);
}
