import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class FooterContainer extends LitWithoutShadowDom {
  static properties = {
    content: { type: String, reflect: true },
  };

  constructor() {
    super();
    this._checkAvailabilityProperty();
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute('content')) {
      throw new Error(`Atribut "content" harus diterapkan pada elemen ${this.localName}`);
    }
  }

  render() {
    return html`
      <div class="row align-items-center pt-2">
        <div class="col">
          <p>${this.content}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('footer-container', FooterContainer);
