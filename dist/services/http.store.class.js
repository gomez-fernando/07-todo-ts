export class HttpStoreClass {
    url;
    constructor() {
        this.url = 'http://localhost:3000/tasks';
    }
    getTasks() {
        // GET
        return fetch(this.url).then((resp) => {
            console.log(resp.status);
            return resp.json();
        });
    }
    getTask(task) {
        // GET
        return fetch(this.url + `/${task.id}`).then((resp) => resp.json());
    }
    setTask(task) {
        // POST
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json());
    }
    updateTask(task) {
        // PUT / PATCH
        return fetch(this.url + `/${task.id}`, {
            method: 'PATCH',
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json());
    }
    deleteTask(id) {
        // DELETE
        return fetch(this.url + `/${id}`, {
            method: 'DELETE',
        }).then((response) => response.status);
    }
}
