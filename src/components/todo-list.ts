/* eslint-disable no-unused-vars */
import { iComponent } from '../interfaces/component.js';
import { TaskModel } from '../models/task.js';
import { HttpStoreClass } from '../services/http.store.class.js';
// import * as store from '../services/store.js';
import { StoreClass } from '../services/store.class.js';

import { AddTask } from './add-task.js';
import { Component } from './component.js';
import { ItemTask } from './task.js';

export class TodoList extends Component implements iComponent {
    tasks!: Array<TaskModel>;
    storeService: HttpStoreClass;
    constructor(public selector: string) {
        super();
        this.storeService = new HttpStoreClass();
        this.storeService.getTasks().then((tasks) => {
            this.tasks = tasks;
            this.updateComponent();
        });
    }
    createTemplate() {
        let html = `
        <h2>ToDo list</h2>
        <slot class="addTask"></slot>
        <ul class="task-list">`;
        this.tasks.forEach((item) => {
            html += new ItemTask('', item).template;
        });
        html += `</ul>`;
        return html;
    }
    private manageComponent() {
        document
            .querySelectorAll('.button')
            .forEach((item) =>
                item.addEventListener('click', this.handlerButton.bind(this))
            );
        document
            .querySelectorAll('[type=checkbox]')
            .forEach((item) =>
                item.addEventListener('change', this.handlerChange.bind(this))
            );
    }
    private updateComponent() {
        this.template = this.createTemplate();
        this.render(this.selector);
        this.manageComponent();

        new AddTask('slot.addTask', this.addTask.bind(this));
    }
    private handlerButton(ev: Event) {
        const deletedId = (<HTMLElement>ev.target).dataset.id as string;
        this.storeService.deleteTask(deletedId).then((status) => {
            if (status === 200) {
                this.tasks = this.tasks.filter((item) => item.id !== deletedId);
                this.updateComponent();
            }
        });
    }

    private handlerChange(ev: Event) {
        const changeId = (<HTMLElement>ev.target).dataset.id;
        console.log('change', changeId);
        const task = this.tasks.find(
            (item) => item.id === changeId
        ) as TaskModel;
        task.isComplete = !task.isComplete;
        this.storeService.updateTask(task).then((task) => {
            this.tasks = this.tasks.map((item) => ({
                ...item,
                isComplete:
                    item.id === changeId ? !item.isComplete : item.isComplete,
            }));
            this.updateComponent();
        });
    }

    public addTask(task: TaskModel) {
        // this.tasks = [...this.tasks, task];
        this.storeService.setTask(task).then((task) => {
            this.tasks.push(task);
            this.updateComponent();
        });
    }
}
