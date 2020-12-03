import React, { Component } from "react";
import Tasks from "../lib/tasks-service";
import { Link } from "react-router-dom";



class AnonList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      tasks:[],
     
    };
  }

  componentDidMount(){
    return Tasks.getAllTodos()
    .then((resp) => {
       console.log(resp)
      this.setState({
        tasks: resp,
      });
    })
    .catch((err) => console.log(err));
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  

  handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      //const {image, name, author } = this.state;
      const res = await Tasks.createTodo(this.state);
      
      this.setState({ title: "", description: "" });
      
      window.location.reload();
    } catch (error) {
      console.log(" error while adding the task ", error);
    }

};

  delete(e, task) {
      Tasks.deleteTodo(task.eachTask._id);
      window.location.reload();
    }

  render() {
    const { description, title } = this.state;
    return (
      <div >
        <h2>Add your tasks!</h2>

        <form  onSubmit={this.handleFormSubmit}>
          <div >
            <label for="TitleInput">Task's title:</label>
            <input
              id="TitleInput"
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange}
            />
          </div>
          <div className="selectCardPic">
            <label for="description">Describe the task:</label>
            <input
              id="description"
              type="text"
              name="description"
              value={description}
              onChange={this.handleChange}
            />
          </div>
          <button  type="submit">
            Upload Task
          </button>
        </form>

        <div>
            {this.state.tasks &&
              this.state.tasks.map((eachTask) => {
                return (
                  <div  key={eachTask._id}>
                    <h1>{eachTask.title}</h1>
                    <p>{eachTask.desciption}</p>
                    <button  onClick={(e) => this.delete(e, { eachTask })}>
                      Delete
                    </button>
                    <Link  to={`/editTask/${eachTask._id}`}>
                      <button >Edit</button>
                    </Link>
                    <Link  to={`/taskDetails/${eachTask._id}`}>
                      <button >Details</button>
                    </Link>
                  </div>
                );
              })}
          </div>
      </div>
    );
  }
}

export default AnonList;
