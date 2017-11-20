import axios from 'axios';

const URL = process.env.API_ENDPOINT;

const requestHandler = axios.create({
  baseURL: URL,
  timeout: 30000,
});

export default requestHandler;
