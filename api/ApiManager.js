import axios from 'axios';

const ApiManager = axios.create({
  baseURL: 'http://54.176.155.237:3000/api/AdminUser',
  responseType: 'json',
  withCredentials: true,
});

export default ApiManager;
