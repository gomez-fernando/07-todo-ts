/* eslint-disable no-unused-vars */
import { iComponent, iMenuOptions } from '../interfaces/component.js';
import { Component } from './component.js';

export class Menu extends Component implements iComponent {
    options: Array<iMenuOptions>;
    constructor(selector: string) {
        super();
        this.options = [
            { path: './index.html', label: 'Home' },
            { path: './todo.html', label: 'Tasks' },
            { path: '/about.html', label: 'About' },
        ];
        this.template = this.createTemplate();
        this.outRender(selector);
    }
    createTemplate() {
        let html = `<nav><ul>`;
        this.options.forEach(
            (item) =>
                (html += `<li><a href=${item.path}>${item.label}<a/></li>`)
        );
        html += `</ul></nav>`;
        return html;
    }
}
