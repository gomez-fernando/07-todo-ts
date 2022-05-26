import { Component } from './component.js';
export class ItemTask extends Component {
    item;
    constructor(selector, item) {
        super();
        this.item = item;
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
