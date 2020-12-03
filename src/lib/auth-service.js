import axios from "axios";

class Services {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:27017/todo-challenge-ironhack-2019'
    //   withCredentials: true,
    });
  };

  createTask = async ({ title, body }) => {
    const postRoute = "/todos"
    try {
      const res = await this.service.post(postRoute, { title });
      return res.data;
    } catch (error) {
      console.log(error);
    };
  };

  getAllTasks = async () => {
    const getRouteAll = "/todos"
    try {
        const res = await this.service.get(getRouteAll);
        return res.data;
    } catch (error) {
        console.log(error);
    }
  };

}; 

const axiosRequestFunctions = new Services();

export default axiosRequestFunctions;