import axios from "axios";

class Services {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:4000'
    //   withCredentials: true,
    });
  };

  createTask = async ({ title, body }) => {
    console.log("now within createtask: ", title, body);
    const postRoute = "/todos"
    try {
      const res = await this.service.post(postRoute, { title, body });
      return res.data;
    } catch (error) {
      console.log(error);
    };
  };

  getAllTasks = async () => {
    const getRouteAll = "/todos"
    try {
        console.log("I'm calling all ToDos...")
        const res = await this.service.get(getRouteAll);
        return res.data;
    } catch (error) {
        console.log(error);
    }
  };

}; 

const axiosRequestFunctions = new Services();

export default axiosRequestFunctions;