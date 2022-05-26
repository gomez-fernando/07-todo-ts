export abstract class Component {
    template!: string;
    render(selector: string) {
        if (selector && document.querySelector(selector)) {
            (<Element>document.querySelector(selector)).innerHTML =
                this.template;
        }
    }
    addRender(selector: string) {
        if (document.querySelector(selector)) {
            (<Element>document.querySelector(selector)).innerHTML +=
                this.template;
        }
    }
    outRender(selector: string) {
        if (document.querySelector(selector)) {
            (<Element>document.querySelector(selector)).outerHTML =
                this.template;
        }
    }
}
