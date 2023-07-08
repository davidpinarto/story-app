import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class NavigationContainer extends LitWithoutShadowDom {
  static properties = {
    brandName: { type: String, reflect: true },
  };

  constructor() {
    super();
    this._checkAvailabilityProperty();
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute('brandName')) {
      throw new Error(`Atribut "brandName" harus diterapkan pada elemen ${this.localName}`);
    }
  }

  render() {
    return html`
      <div class="container-fluid px-sm-2 px-md-5">
        <!-- logo -->
        <a class="navbar-brand fs-2 fw-bold" href="/">${this.brandName}</a>

        <div class="navigation-wrapper d-flex gap-2">
          <nav-need-auth
            loginPath="/auth/login.html"
            registerPath="/auth/register.html"
            id="loginMenu"
          ></nav-need-auth>
          <nav-already-auth class="d-none" id="userLoggedMenu"></nav-already-auth>

          <!-- offcanvas -->
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div class="offcanvas-header justify-content-end">
              <button
                type="button"
                class="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <!-- NavigationContainer -->
              <div class="container text-center mx-auto w-75">
                <div class="navbar-item m-2">
                  <a href="/" class="p-2 rounded-pill">Dashboard</a>
                </div>
                <div class="navbar-item m-2">
                  <a href="/add.html" class="p-2 rounded-pill">Add Story</a>
                </div>
                <div class="navbar-item m-2">
                  <a href="/about-us.html" class="p-2 rounded-pill">About Us</a>
                </div>
              </div>
            </div>
          </div>

          <!-- offcanvas toggle -->
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
            aria-expanded="false"
            aria-label="Toggle NavigationContainer"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    `;
  }
}

customElements.define('navigation-container', NavigationContainer);
