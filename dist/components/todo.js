import { TASKS } from '../models/data.js';
import { AddTask } from './addTask.js';
import { Component } from './component.js';
export class TodoList extends Component {
    selector;
    tasks;
    constructor(selector) {
        super();
        this.selector = selector;
        this.tasks = TASKS;
        this.updateComponent();
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
    manageComponent() {
        document
            .querySelectorAll('.button')
            .forEach((item) => item.addEventListener('click', this.handlerButton.bind(this)));
        document
            .querySelectorAll('[type=checkbox]')
            .forEach((item) => item.addEventListener('change', this.handlerChange.bind(this)));
    }
    updateComponent() {
        this.template = this.createTemplate();
        this.render(this.selector);
        this.manageComponent();
        console.log(this.tasks);
        new AddTask('slot.addTask', this.addTask.bind(this));
    }
    handlerButton(ev) {
        const deletedId = ev.target.dataset.id;
        console.log('click', deletedId);
        this.tasks = this.tasks.filter((item) => item.id !== deletedId);
        this.updateComponent();
    }
    handlerChange(ev) {
        const changeId = ev.target.dataset.id;
        console.log('change', changeId);
        this.tasks = this.tasks.map((item) => ({
            ...item,
            isComplete: item.id === changeId ? !item.isComplete : item.isComplete,
        }));
        this.updateComponent();
    }
    addTask(task) {
        // this.tasks = [...this.tasks, task];
        this.tasks.push(task);
        this.updateComponent();
    }
}
