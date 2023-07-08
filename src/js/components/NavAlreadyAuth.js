import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

import Utils from '../utils/utils';
import Config from '../config/config';
import CheckUserAuth from '../pages/auth/check-user-auth';

class NavAlreadyAuth extends LitWithoutShadowDom {
  static properties = {};

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="dropdown">
        <a
          class="btn btn-secondary dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <div class="me-2 d-inline-block">
            <img
              id="imgUserLogged"
              style="width: 30px;height: 30px"
              class="img-fluid rounded-pill"
              src="https://ui-avatars.com/api/?name=User%20Name&background=random"
              alt="User Name"
            />
          </div>
        </a>

        <ul class="dropdown-menu">
          <li>
            <button class="dropdown-item btn" id="userLogOut" @click=${this._userLogOut}>
              Keluar
            </button>
          </li>
        </ul>
      </div>
    `;
  }

  _userLogOut(event) {
    event.preventDefault();
    Utils.destroyUserToken(Config.USER_TOKEN_KEY);
    CheckUserAuth.checkLoginState();
  }
}

customElements.define('nav-already-auth', NavAlreadyAuth);
