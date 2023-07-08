import axios from 'axios';
import Config from '../config/config';
import Utils from '../utils/utils';
import ApiEndpoint from '../config/api-endpoint';

const RequestHttp = {
  async getStories() {
    return await axios.get(ApiEndpoint.GET_ALL_STORIES, {
      headers: {
        Authorization: `Bearer ${Utils.getUserToken(Config.USER_TOKEN_KEY)}`,
      },
    });
  },

  async addNewStory({ description, photo, lat, lon }) {
    const data = { description, photo, lat, lon };

    return await axios.post(ApiEndpoint.ADD_NEW_STORY, data, {
      headers: {
        Authorization: `Bearer ${Utils.getUserToken(Config.USER_TOKEN_KEY)}`,
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};

export default RequestHttp;
