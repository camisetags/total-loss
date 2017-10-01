import axios from 'axios';
import Cookies from 'js-cookie';

const csrftoken = Cookies.get('csrftoken');

axios.defaults.baseURL = process.env.API_ENDPOINT;

axios.defaults.headers.common.cookiename = 'csrftoken';
axios.defaults.headers.common['X-CSRFToken'] = csrftoken;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

// axios.defaults.xsrfHeaderName = 'X-CSRFToken';
// axios.defaults.xsrfCookieName = 'csrftoken';
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Content-Type';
