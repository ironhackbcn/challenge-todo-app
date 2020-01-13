import axios from 'axios';

class ToDo {
    constructor() {
      this.todo = axios.create({
        baseURL: "http://localhost:4000/api/v1",
        withCredentials: true,
      });
    }

    add(title) {

        return this.todo
          .post('/todos', {title})
          .then((result) => result).catch((err) => {
            console.log("error", err)
          });
      }
    
    getAll(){
        return this.todo
          .get('/todos')
.then((data) => data)
.catch((err) => {
    console.log(err)
});
    }

    delete(id){
        return this.todo
        .delete(`/todos/${id}`)
        .then((result) => result).catch((err) => {
            console.log(err)
        });
    }
}
const todoService = new ToDo();
export default todoService