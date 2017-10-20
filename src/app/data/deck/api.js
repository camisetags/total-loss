// @flow
import axios from 'axios';

axios.defaults.baseURL = process.env.API_ENDPOINT || '';

const DeckServices = {
  getList: (): Promise<Object> => axios.get('/api/deck/'),
  getById: (id: number): Promise<Object> => axios.get(`/api/deck/${id}`),
};

export default DeckServices;
