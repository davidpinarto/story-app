import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class NavNeedAuth extends LitWithoutShadowDom {
  static properties = {
    loginPath: { type: String, reflect: true },
    registerPath: { type: String, reflect: true },
  };

  constructor() {
    super();
    this._checkAvailabilityProperty();
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute('loginPath')) {
      throw new Error(`Atribut "loginPath" harus diterapkan pada elemen ${this.localName}`);
    }
    if (!this.hasAttribute('registerPath')) {
      throw new Error(`Atribut "registerPath" harus diterapkan pada elemen ${this.localName}`);
    }
  }

  render() {
    return html`
      <a class="px-3 btn btn-primary" href="${this.registerPath}">Sign Up</a>
      <a class="px-3 btn btn-secondary" href="${this.loginPath}">Sign In</a>
    `;
  }
}

customElements.define('nav-need-auth', NavNeedAuth);
