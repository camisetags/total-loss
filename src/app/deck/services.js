// @flow
import axios from 'axios';

axios.defaults.baseURL = process.env.API_ENDPOINT;

const DeckServices = {
  getList: () => axios.get('/api/deck'),
};

export default DeckServices;
