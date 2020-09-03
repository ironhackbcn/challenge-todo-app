import axios from 'axios';

const AxiosCredentials = axios.create({
  baseURL: 'http://localhost:4000/api/v1',
  withCredentials: true,
});

export default AxiosCredentials;