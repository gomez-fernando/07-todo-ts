import { Component } from './component.js';
export class Sample extends Component {
    constructor(selector) {
        super();
        this.template = this.createTemplate();
        this.render(selector);
    }
    createTemplate() {
        return ``;
    }
}
