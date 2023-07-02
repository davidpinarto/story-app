import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class SubmitBtn extends LitWithoutShadowDom {
  static properties = {
    content: { type: String, reflect: true },
    classes: { type: String, reflect: true },
  };

  constructor() {
    super();

    this.classes = '';
  }

  render() {
    return html` <button class="btn ${this.classes}" type="submit">${this.content}</button> `;
  }
}

customElements.define('submit-btn', SubmitBtn);
