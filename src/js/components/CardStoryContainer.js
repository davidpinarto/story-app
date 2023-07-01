import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class CardStoryContainer extends LitWithoutShadowDom {
  static properties = {};

  constructor() {
    super();
  }

  render() {
    return html``;
  }
}

customElements.define('card-story-container', CardStoryContainer);
