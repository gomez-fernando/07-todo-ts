/* eslint-disable no-unused-vars */
import { iComponent } from '../interfaces/component.js';
import { TASKS } from '../models/data.js';
import { TaskModel } from '../models/task.js';
import { AddTask } from './add-task.js';
import { Component } from './component.js';
import { ItemTask } from './task.js';

export class TodoList extends Component implements iComponent {
    tasks: Array<TaskModel>;
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
    public addTask(task: TaskModel){
        this.tasks = [...this.tasks, task];
        this.updateComponent();
        console.log('Guardado', this.tasks);
       
    }
}
