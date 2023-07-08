import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class LoadingSpinner extends LitWithoutShadowDom {
  static properties = {};

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    `;
  }
}

customElements.define('loading-spinner', LoadingSpinner);
