import axios from 'axios';

// Tasks API

class ApiService {
  constructor () {
    this.tasks = axios.create({
      // TODO: Replace with environment variable
      baseURL: 'http://localhost:4000/api/v1',
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

  // Get task details
  get = (id) => {
    return this.tasks.get('/todos/' + id).then(
      response => response
    ).catch(
      error => console.log(error)
    );
  }

  // Create task
  create = (task) => {
    const {
      title,
      body
    } = task;
    return this.tasks
      .post('/todos', {
        title,
        body
      }).then(
        response => response
      ).catch(
        error => console.log(error)
      );
  }

  // Update task
  update = (task) => {
    const {
      id,
      title,
      body
    } = task;
    return this.tasks
      .put('/todos/' + id, {
        title,
        body
      }).then(
        response => response
      ).catch(
        error => console.log(error)
      );
  }

  // Delete task
  delete = (id) => {
    return this.tasks.delete('/todos/' + id).then(
      response => response
    ).catch(
      error => console.log(error)
    );
  }
}

const axiosRequestFunctions = new ApiService();
export default axiosRequestFunctions;