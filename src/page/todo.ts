import { Footer } from '../components/footer.js';
import { Header } from '../components/header.js';
import { TodoList } from '../components/todo-list.js';

export function todo() {
    new Header('slot.header');
    new TodoList('main');
    new Footer('footer');
}
