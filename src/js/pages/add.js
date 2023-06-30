const Add = {
  async init() {
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

  _sendPost() {
    const formData = this._getFormData();
    if (this._validateFormData(formData)) {
      console.log('formData');
      console.log(formData);

      this._goToDashboardPage();
    }
  },

  _getFormData() {
    const nameInput = document.querySelector('#validationStoryName');
    const dateInput = document.querySelector('#validationCustomDate');
    const pictureInput = document.querySelector('#validationPictureStory');
    const descriptionInput = document.querySelector('#validationCustomNotes');

    return {
      name: nameInput.value,
      date: new Date(dateInput.value),
      picture: pictureInput.files[0],
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
