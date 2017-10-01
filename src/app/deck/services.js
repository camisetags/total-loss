import axios from 'axios';

const DeckServices = {
  getList: () => axios.get('/api/deck'),
};

export default DeckServices;
