/* eslint-disable no-unused-vars */
import { iComponent } from '../interfaces/component.js';
import { Component } from './component.js';
import { Menu } from './menu.js';

export class Header extends Component implements iComponent {
    constructor(selector: string) {
        super();
        this.template = this.createTemplate();
        this.outRender(selector);
        new Menu('slot.menu');
    }
    createTemplate() {
        return `
        <header>
            <h1>TODO List</h1>
            <slot class='menu'></slot>
        </header>
        `;
    }
}
