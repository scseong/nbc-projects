import axios from 'axios';

const JSON_SERVER_URL = 'http://localhost:5000';

export const todoApi = axios.create({
  baseURL: JSON_SERVER_URL,
});
