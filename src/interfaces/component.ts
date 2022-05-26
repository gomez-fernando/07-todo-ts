export interface iComponent {
    template: string;
    createTemplate(): string;
}

export interface iMenuOptions {
    path: string;
    label: string;
}
