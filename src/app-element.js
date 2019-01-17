import {LitElement, html} from 'lit-element';
import { connectRouter } from 'lit-redux-router';
// import store from './store.js';

// connectRouter(store);

export class AppElement extends LitElement {
    render() {
        return html`
            <main>
                Wololo
            </main>
        `;
    }
}

customElements.define('app-element', AppElement);
