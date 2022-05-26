/* eslint-disable no-unused-vars */
import { iComponent } from '../interfaces/component.js';
import { TASKS } from '../models/data.js';
import { Task } from '../models/task.js';
import { AddTask } from './addTask.js';
import { Component } from './component.js';

export class Todo extends Component implements iComponent {
    tasks: Array<Task>;
    // addTask: Function
    constructor(public selector: string) {
        super();
        this.tasks = TASKS;
        this.updateComponent()
    }
    createTemplate() {
        let html = `
        <h2>ToDo list</h2>
        <slot class="addTask"></slot>
        <ul class="task-list">`;
        this.tasks.forEach((item) => {
            html += `<li>
            <span><input type="checkbox" 
            data-id="${item.id}"
            ${item.isComplete && 'checked'}></span>
            <span>${item.name}</span>
            <span> - </span> 
            <span>${item.responsible}<span>
            <span class="button" role="button" 
            data-id="${item.id}">🗑️</span>
            </li>`;
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
    private updateComponent(){
        this.template = this.createTemplate();
        this.render(this.selector);
        this.manageComponent();
        new AddTask('slot.addTask', this.addTask.bind(this));
        console.log(this.tasks);
    }
    private handlerButton(ev: Event) {
        const deletedId = (<HTMLElement>ev.target).dataset.id;
        console.log('click', deletedId);
        this.tasks = this.tasks.filter((item) => item.id !== deletedId);
        this.updateComponent()
    }

    private handlerChange(ev: Event) {
        const changeId = (<HTMLElement>ev.target).dataset.id;
        console.log('change', changeId);
        this.tasks = this.tasks.map((item) => ({
            ...item,
            isComplete:
                item.id === changeId ? !item.isComplete : item.isComplete,
        }));
        this.updateComponent();
    }
    public addTask(task: Task){
        this.tasks = [...this.tasks, task];
        this.updateComponent();
        console.log('Guardado', this.tasks);
       
    }
}
