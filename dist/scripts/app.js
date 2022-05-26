import { index } from '../page/index.js';
import { about } from '../page/about.js';
import { todo } from '../page/todo.js';
(() => {
    const path = location.pathname.split('/');
    if (path[path.length - 1] === '' ||
        path[path.length - 1] === 'index.html') {
        document.addEventListener('DOMContentLoaded', index);
    }
    else if (path[path.length - 1] === 'todo.html') {
        document.addEventListener('DOMContentLoaded', todo);
    }
    else {
        document.addEventListener('DOMContentLoaded', about);
    }
})();
