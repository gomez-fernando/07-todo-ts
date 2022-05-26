export class Component {
    template;
    render(selector) {
        if (selector && document.querySelector(selector)) {
            document.querySelector(selector).innerHTML =
                this.template;
        }
    }
    addRender(selector) {
        if (document.querySelector(selector)) {
            document.querySelector(selector).innerHTML +=
                this.template;
        }
    }
    outRender(selector) {
        if (document.querySelector(selector)) {
            document.querySelector(selector).outerHTML =
                this.template;
        }
    }
}
