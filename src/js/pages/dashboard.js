import CheckUserAuth from './auth/check-user-auth';
import RequestHttp from '../network/request-http';

const Dashboard = {
  async init() {
    CheckUserAuth.checkLoginState();

    await this._initialData();
  },

  async _initialData() {
    try {
      this._stories = await RequestHttp.getStories();
      console.log(this._stories);

      this._storyData = this._stories.data.listStory;
      this._checkDataAndCreateCardStory(this._storyData);
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
  },

  _checkDataAndCreateCardStory(dataStory) {
    if (!Array.isArray(dataStory)) {
      throw new Error('Invalid, data shoud be an array');
    }

    const cardStoryContainer = document.querySelector('card-story-container');

    cardStoryContainer.innerHTML = '';

    dataStory.forEach((item, index) => {
      cardStoryContainer.innerHTML += this._cardStory(dataStory[index]);
    });
  },

  _cardStory({ name, photoUrl, description, createdAt: date }) {
    const createdAt = new Date(date).toDateString();
    return `
      <div class="col-sm-12 col-md-10 col-lg-3 align-self-center">
        <div class="card text-white bg-dark">
          <img src="${photoUrl}" class="card-img-top" alt="story photo" />
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${createdAt}</h6>
            <p class="card-text">
              ${description}
            </p>
          </div>
        </div>
      </div>
    `;
  },
};

export default Dashboard;
