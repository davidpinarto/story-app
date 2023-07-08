import CheckUserAuth from './auth/check-user-auth';
import RequestHttp from '../network/request-http';

const Add = {
  async init() {
    CheckUserAuth.checkLoginState();

    this._initialListener();
  },

  _initialListener() {
    const addStoryForm = document.querySelector('#addStoryForm');
    addStoryForm.addEventListener(
      'submit',
      (event) => {
        event.preventDefault();
        event.stopPropagation();

        addStoryForm.classList.add('was-validated');
        this._sendPost();
      },
      false,
    );
  },

  async _sendPost() {
    const formData = this._getFormData();
    if (this._validateFormData(formData)) {
      console.log('formData');
      console.log(formData);

      try {
        const response = await RequestHttp.addNewStory(formData);
        window.alert('New Story added successfully');
        this._goToDashboardPage();
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
      }
    }
  },

  _getFormData() {
    const pictureInput = document.querySelector('#validationPictureStory');
    const descriptionInput = document.querySelector('#validationCustomNotes');

    return {
      photo: pictureInput.files[0],
      description: descriptionInput.value,
    };
  },

  _validateFormData(formData) {
    Object.values(formData).forEach((item) => {
      if (!Boolean(item)) {
        throw new Error('Data is not valid, please fill all the form');
      }
    });

    return true;
  },

  _goToDashboardPage() {
    window.location.href = '/';
  },
};

export default Add;
