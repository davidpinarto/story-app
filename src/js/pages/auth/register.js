import Auth from '../../network/auth';

const Register = {
  async init() {
    this._initialListener();
  },

  _initialListener() {
    const registerForm = document.querySelector('#registerForm');

    registerForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      event.stopPropagation();

      registerForm.classList.add('was-validated');

      await this._getRegistered();
    });
  },

  async _getRegistered() {
    const formData = this._getFormData();

    if (this._validateFormData(formData)) {
      console.log('formData');
      console.log(formData);

      try {
        const response = await Auth.register({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
        window.alert('Registered a new user');
        this._goToLoginPage();
      } catch (error) {
        if (error.response) {
          // Request berhasil dikirimkan dan mendapatkan response dari web server.
          // Namun, terjadi error karena status code HTTP berada di luar jangkauan antara 200 hingga 299

          // Properti response berisi data error yang didapat dari server
          console.log(error.response);
        } else if (error.request) {
          // Request telah dikirimkan, tetapi tidak mendapatkan response dari server

          // Properti request berisi object XMLHttpRequest yang berisi request yang dikirimkan
          console.log(error.request);
        } else {
          // Terjadi suatu kesalahan saat mengirimkan request
          console.log('Error', error.message);
        }

        console.log(error);
      }
    }
  },

  _getFormData() {
    const name = document.querySelector('#validationName');
    const email = document.querySelector('#validationEmail');
    const password = document.querySelector('#validationPassword');

    const passwordCol = document.querySelector('#passwordCol');
    const passwordValidation = passwordCol.querySelector('.invalid-feedback');

    if (password.value.length < 8 && password.value.length !== 0) {
      passwordValidation.innerText = '';
      passwordValidation.innerHTML = 'Minimum password character is 8';
    } else {
      passwordValidation.innerText = '';
      passwordValidation.innerHTML = 'Please insert your Password.';
    }

    return {
      name: name.value,
      email: email.value,
      password: password.value,
    };
  },

  _validateFormData(formData) {
    const formDataFiltered = Object.values(formData).filter((item) => item === '');

    return formDataFiltered.length === 0;
  },

  _goToLoginPage() {
    window.location.href = '/auth/login.html';
  },
};

export default Register;
