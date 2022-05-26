import { Task } from '../models/task.js';
import { Component } from './component.js';
export class AddTask extends Component {
    add;
    constructor(selector, add) {
        super();
        this.add = add;
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
    manageComponent() {
        document
            .querySelector('form')
            ?.addEventListener('submit', this.handlerSubmit.bind(this));
    }
    handlerSubmit(ev) {
        let data = ['', ''];
        ev.preventDefault();
        document.querySelectorAll('form input').forEach((item, i) => {
            data[i] = item.value;
        });
        this.add(new Task(...data));
    }
}
