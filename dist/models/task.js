/* eslint-disable no-unused-vars */
// export interface iTask {
//     id: string;
//     name: string;
//     responsible: string;
//     isComplete: boolean;
// }
// (false);implements iTask
export class TaskModel {
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
        this.id = TaskModel.generateId();
        this.isComplete = false;
    }
}
