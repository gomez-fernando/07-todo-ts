import { Footer } from '../components/footer.js';
import { Header } from '../components/header.js';

(() => {
    document.addEventListener('DOMContentLoaded', app);
})();

function app() {
    new Header('slot.header');

    new Footer('footer');
}
