import CheckUserAuth from './auth/check-user-auth';

const Dashboard = {
  async init() {
    CheckUserAuth.checkLoginState();

    await this._initialData();
  },

  async _initialData() {
    const fetchRecords = await fetch(
      'https://raw.githubusercontent.com/dicodingacademy/a565-webtools-labs/099-shared-files/proyek-awal/DATA.json',
    );
    const responseRecords = await fetchRecords.json();
    this._storyData = responseRecords.listStory;
    this._checkDataAndCreateCardStory(this._storyData);
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
