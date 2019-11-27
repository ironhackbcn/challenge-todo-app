import axios from 'axios';

// Tasks API

class ApiService {
  constructor () {
    this.tasks = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
      withCredentials: true
    });
  }

  // List tasks
  list = () => {
    return this.tasks.get('/todos').then(
      response => response
    ).catch(
      error => console.log(error)
    );
  }
}

const axiosRequestFunctions = new ApiService();
export default axiosRequestFunctions;