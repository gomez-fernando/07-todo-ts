import { TaskModel } from './task.js';
let tasks = [
    new TaskModel('Hacer el header', 'Irene'),
    new TaskModel('Hacer el footer', 'Fernamdo'),
    new TaskModel('Hacer el main', 'Jose'),
];
tasks[0].isComplete = true;
export const TASKS = tasks;
