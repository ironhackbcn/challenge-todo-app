import axios from 'axios';

class ToDo {
    constructor() {
        this.todo = axios.create({
          baseURL: 'http://localhost:4000/api/v1' + '/todos',
        });
      }
  
    // todo.getAll()
    getAllTodos() {
      return this.todo
                .get()
                .then(({ data }) => data);
    }
  
    // todo.getOneById(todoId)
    getOneTodo(_id) {
      return this.todo
                .get(`/todo-details/${_id}`)
                .then(({ data }) => data);
    }

    // todo.create()
    addNewTodo(skatetodoInfo) {
      const { title, body } = todoInfo;

      return this.todo
      .post("",{ title, body })
      .then(({ data }) => data);
    }

  }

const toDoService = new ToDo();
  
export default toDoService;