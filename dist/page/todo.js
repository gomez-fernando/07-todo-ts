import { Footer } from '../components/footer.js';
import { Header } from '../components/header.js';
import { Todo } from '../components/todo.js';
export function todo() {
    new Header('slot.header');
    new Todo('main');
    new Footer('footer');
}
