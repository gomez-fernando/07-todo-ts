/* eslint-disable no-unused-vars */
// import { v4 as uuid } from 'uuid';
// export interface iTask {
//     id: string;
//     name: string;
//     responsible: string;
//     isComplete: boolean;
// }
// (false);implements iTask
export class Task {
    name;
    responsible;
    static generateId() {
        // error
        // return uuid();
        return String(Math.floor(Math.random() * 10_000_000));
    }
    id;
    isComplete;
    constructor(name, responsible) {
        this.name = name;
        this.responsible = responsible;
        this.id = Task.generateId();
        this.isComplete = false;
    }
}
