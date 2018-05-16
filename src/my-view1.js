import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class MyView1 extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        h2 {
          color: red;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'healthy-app'
      }
    };
  }
}

window.customElements.define('my-view1', MyView1);
