import axios from 'axios';

class QuoteService {
  constructor() {
    this.axios = axios.create({
      baseURL: `${process.env.REACT_APP_BACKEND_BASE_URL}/api/v1`,
    });
  }
}
