import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class FormContainer extends LitWithoutShadowDom {
  static properties = {
    id: { type: String, reflect: true },
  };

  constructor() {
    super();
  }

  render() {
    return html`
      <form class="row g-0 border border-dark rounded p-4" id="${this.id}" novalidate>
        <div class="col-12 g-3">
          <label for="validationStoryName" class="form-label">Nama</label>
          <input
            type="text"
            class="form-control"
            id="validationStoryName"
            placeholder="Masukkan nama "
            required
          />
          <div class="invalid-feedback">Wajib diisi</div>
        </div>

        <div class="col-12 g-3">
          <label for="validationCustomDate" class="form-label">Tanggal</label>
          <div class="input-group has-validation">
            <span class="input-group-text"><i class="bi bi-calendar-event"></i></span>
            <input type="datetime-local" class="form-control" id="validationCustomDate" required />
            <div class="invalid-feedback">Wajib diisi</div>
          </div>
        </div>

        <div class="col-12 g-3">
          <label for="validationPictureStory" class="form-label">Photo</label>
          <input
            type="file"
            class="form-control"
            id="validationPictureStory"
            accept="image/*"
            required
          />
          <div class="invalid-feedback">Wajib diisi</div>
        </div>

        <div class="col-12 g-3">
          <label for="validationCustomNotes" class="form-label">Deskripsi</label>
          <textarea
            class="form-control"
            id="validationCustomNotes"
            rows="3"
            required
            placeholder="Deskripsi cerita anda"
          ></textarea>
          <div class="invalid-feedback">Wajib diisi</div>
        </div>

        <div class="col-12 text-center g-3">
          <submit-btn classes="btn-primary" content="Submit"></submit-btn>
        </div>
      </form>
    `;
  }
}

customElements.define('form-container', FormContainer);
