import axios from 'axios';
class Todos {
  constructor() {
    this.todos = axios.create({
      baseURL: 'http:localhost/4000/api/v1/todos',
      withCredentials: true,
    });
  }

  getAll() {
    return this.todos
              .get('/')
              .then(({ data }) => data);
  }

  getOne(id) {
    return this.todos
              .get(`/${id}`)
              .then(({ data }) => data);
  }

  createOne(item) {
    const {title, body} = item;
    return this.todos
              .post('/', {title, body})
              .then(({ data }) => data);
  }

  updateOne(modifiedItem, id) {
    const {title, body} = modifiedItem;
    return this.todos
              .put(`/${id}`, {title, body})
              .then(({data}) => data);
  }

  deleteOne(id) {
    return this.todos
              .delete(`/${id}`)
              .then(({ data }) => data);
  }
}

const todosService = new Todos();

export default todosService;