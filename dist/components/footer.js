import { Component } from './component.js';
export class Footer extends Component {
    constructor(selector) {
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
