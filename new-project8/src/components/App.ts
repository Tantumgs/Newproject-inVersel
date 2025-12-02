class App {
    constructor() {
        this.title = 'My Vite App';
    }

    render() {
        const appElement = document.createElement('div');
        appElement.innerHTML = `<h1>${this.title}</h1>`;
        return appElement;
    }

    mount(container) {
        container.appendChild(this.render());
    }
}

export default App;