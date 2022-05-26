/* eslint-disable no-unused-vars */
import { iComponent } from '../interfaces/component.js';
import { Component } from './component.js';

export class Footer extends Component implements iComponent {
    constructor(selector: string) {
        super();
        this.template = this.createTemplate();
        this.render(selector);
    }
    createTemplate() {
        return `
        <address>ISDI Coders</address>
        `;
    }
}
