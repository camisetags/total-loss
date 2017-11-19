import requestHandler from '../requestHandler';

const DeckApi = {
  getList: () => requestHandler.get('/api/deck/'),
  getById: id => requestHandler.get(`/api/deck/${id}`),
};

export default DeckApi;
