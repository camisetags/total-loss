const { API_ENDPOINT = 'http://total-loss-api.herokuapp.com' } = process.env;

module.exports = {
  API_ENDPOINT,
  vendorChunks: [
    'axios',
    'react',
    'react-dom',
    'react-redux',
    'react-router-dom',
    'redux',
    'redux-thunk',
  ],
};
