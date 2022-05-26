import { Component } from './component.js';
export class Menu extends Component {
    options;
    constructor(selector) {
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
        this.options.forEach((item) => (html += `<li><a href=${item.path}>${item.label}<a/></li>`));
        html += `</ul></nav>`;
        return html;
    }
}
