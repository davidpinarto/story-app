import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class LoginForm extends LitWithoutShadowDom {
  static properties = {
    minPasswordLength: {
      type: Number,
    },
  };

  constructor() {
    super();

    this.minPasswordLength = 8;
  }

  render() {
    return html`
      <form
        id="loginForm"
        class="row g-3 needs-validation d-flex justify-content-center"
        novalidate
      >
        <div class="col-8 form-floating">
          <input
            type="email"
            class="form-control"
            id="validationEmail"
            placeholder="name@example.com"
            required
          />
          <label for="validationEmail">Email address</label>
          <div class="invalid-feedback">Please insert your Email.</div>
        </div>
        <div class="col-8 form-floating">
          <input
            type="password"
            class="form-control"
            id="validationPassword"
            placeholder="Password"
            minlength="${this.minPasswordLength}"
            required
          />
          <label for="validationPassword">Password</label>
          <div class="invalid-feedback">Please insert your Password.</div>
        </div>

        <div class="col-12 text-center mt-5">
          <button class="btn btn-primary" type="submit">Login</button>
        </div>

        <div class="mt-4 text-center">
          Belum punya akun? <a href="/auth/register.html">Register</a>
        </div>
      </form>
    `;
  }
}

customElements.define('login-form', LoginForm);
