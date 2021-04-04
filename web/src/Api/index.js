import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:44351'
});

export default api;