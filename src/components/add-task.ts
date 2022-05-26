/* eslint-disable no-unused-vars */
import { iComponent } from '../interfaces/component.js';
import { TaskModel } from '../models/task.js';
import { Component } from './component.js';

export class AddTask extends Component implements iComponent {
    constructor(selector: string, public add: Function) {
        super();
        this.template = this.createTemplate();
        this.render(selector);
        this.manageComponent();
    }
    createTemplate() {
        return `
        <h3>Añadir tarea</> 
        <form action="">
            <input type="text" name="name" id="name"
            placeholder="describe la tarea" required>
            <input type="text" name="responsible" 
            placeholder="responsable de la tarea"
            id="responsible">
            <button type="submit">Guardar</button>
        </form>
        `;
    }
    private manageComponent() {
        document
            .querySelector('form')
            ?.addEventListener('submit', this.handlerSubmit.bind(this));
    }
    private handlerSubmit(ev: Event) {
        let data: [string, string] = ['', ''];
        ev.preventDefault();

        document.querySelectorAll('form input').forEach((item, i) => {
            data[i] = (<HTMLFormElement>item).value;
        });
        this.add(new TaskModel(...data));
    }
}
