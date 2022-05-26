import { Task } from './task.js';

let tasks = [
    new Task('Hacer el header', 'Irene'),
    new Task('Hacer el footer', 'Fernamdo'),
    new Task('Hacer el main', 'Jose'),
];
tasks[0].isComplete = true;
export const TASKS: Array<Task> = tasks;
