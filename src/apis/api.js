import axios from 'axios';
import { logout } from 'redux/modules/authSlice';

let store;

export const injectStore = (_store) => {
  store = _store;
};

const apiWithLetter = axios.create({
  baseURL: process.env.REACT_APP_JSON_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const apiWithAuth = axios.create({
  baseURL: process.env.REACT_APP_AUTH_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiWithLetter.interceptors.request.use(
  async function (config) {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    await apiWithAuth.get('/user');
    return config;
  },

  function (error) {
    return Promise.reject(error);
  },
);

apiWithAuth.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

apiWithAuth.interceptors.response.use(
  function (response) {
    return response;
  },

  function (error) {
    const message = error.response.data.message;
    if (message === '토큰이 만료되었습니다. 다시 로그인 해주세요.') {
      store.dispatch(logout());
      return alert('로그인이 필요합니다.');
    }
    if (message === '헤더에 authorization 정보가 존재하지 않습니다.') {
      return;
    }

    return Promise.reject(error);
  },
);

export { apiWithLetter, apiWithAuth };
