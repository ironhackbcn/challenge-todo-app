import axios from 'axios';

class MyTaskList {
    constructor() {
        this.myTask = axios.create({
          baseURL: "http://localhost:4000/api/v1/",
          withCredentials: true,
        });
      }

    createTask(newMyTask) {
        return this.myTask.post('/create-task', newMyTask )
            .then(({ data }) => data)
            
    } 

    allMyTodos() {
      return this.myTask.get('/todos').then(response => response.data);
    }

    getOneMyTask =(id) =>{
      return this.myTask.get(`/todos/${id}`)
      .then((data)=> data.data )
    }

    deleteMyTask =(id) =>{
      return this.myTask.delete(`todos/${id}/remove`)
      .then((data)=> data.data )
    }
    
}
     
    
    const myTaskService = new MyTaskList();
    
    export default myTaskService;   