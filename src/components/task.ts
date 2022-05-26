/* eslint-disable no-unused-vars */
import { iComponent } from '../interfaces/component.js';
import { TaskModel } from '../models/task.js';
import { Component } from './component.js';

export class ItemTask extends Component implements iComponent {
    constructor(selector: string, public item: TaskModel) {
        super();
        this.template = this.createTemplate();
        this.render(selector);
    }
    createTemplate() {
        return `
        <li>
            <span><input type="checkbox" 
            data-id="${this.item.id}"
            ${this.item.isComplete && 'checked'}></span>
            <span>${this.item.name}</span>
            <span> - </span> 
            <span>${this.item.responsible}<span>
            <span class="button" role="button" 
            data-id="${this.item.id}">🗑️</span>
        </li>
        `;
    }
}
