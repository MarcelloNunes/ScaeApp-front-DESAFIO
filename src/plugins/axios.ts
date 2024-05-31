import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5215', // URL da sua API
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
