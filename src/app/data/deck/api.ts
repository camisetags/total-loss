import requestHandler from '../requestHandler';
import { Api } from '../types';

const DeckApi: Api = {
  getList: () => requestHandler.get('/api/deck/'),
  getById: (id: number) => requestHandler.get(`/api/deck/${id}`),
};

export default DeckApi;
