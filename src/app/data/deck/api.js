import axios from 'axios';

axios.defaults.baseURL = process.env.API_ENDPOINT;

const DeckServices = {
  getList: () => axios.get('/api/deck/'),
  getById: id => axios.get(`/api/deck/${id}`),
};

export default DeckServices;
