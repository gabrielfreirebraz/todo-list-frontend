import axios from 'Axios';
import { getToken } from '.auth/';

const api = axios.create({
  // baseURL: "https://bolttech-todo.herokuapp.com"
  baseURL: 'http://localhost:3000',
});

api.interceptors.request.use(async function config() {
  const token = getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
