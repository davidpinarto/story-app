import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class FooterContainer extends LitWithoutShadowDom {
  static properties = {};

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="row align-items-center pt-2">
        <div class="col">
          <p>This website is created with <i class="bi bi-heart-fill"></i> by David Pinarto</p>
        </div>
      </div>
    `;
  }
}

customElements.define('footer-container', FooterContainer);
