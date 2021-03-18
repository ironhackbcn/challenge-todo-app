import React, { Component } from 'react'
import axios from 'axios';

import CreateTask from './CreateTask/CreateTask';
import UpdateTask from './UpdateTask/UpdateTask';

class todoList extends Component {
    state = {
        taskList: [],
        createTaskIsOn: false,
        showMoreIsOn: false,
        updateTaskIsOn: false
    }

    componentDidMount = () => {
        axios.get("http://localhost:4000/api/v1/todos")
        .then( (response) => {
            this.setState({ taskList: response.data})
        })
    }

    toggleCreateTask = () => {
        this.setState({ createTaskIsOn: !this.state.createTaskIsOn })
    }

    toggleUpdateTask = () => {
        this.setState({ updateTaskIsOn: !this.state.updateTaskIsOn })
    }

    toggleShowMore = () => {
        this.setState({ showMoreIsOn: !this.state.showMoreIsOn })
    }

    render() {
        return (
            <div>
                <div>
                    <h1>This is your To-do list</h1>
                    {this.state.taskList.map((oneTask, i) => {
                        const id = oneTask._id;
                        return (
                            <div key={oneTask._id}>
                                <ul>
                                    <li>{oneTask.title}</li>
                                    {this.state.showMoreIsOn
                                        ? <p>{oneTask.body}</p>
                                        : null}
                                    <button onClick={this.toggleShowMore}>See more</button>
                                    <button onClick={this.toggleUpdateTask}>Update</button>
                                    {this.state.updateTaskIsOn 
                                        ? <UpdateTask id={id} />
                                        : null
                                    }
                                    <br />
                                    <label>Mark as done:</label>
                                    <input type="checkbox" />
                                </ul>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <button onClick={this.toggleCreateTask}>Create new task</button>
                    {this.state.createTaskIsOn 
                        ? <CreateTask />
                        : null
                    }
                </div>
            </div>
        )
    }
}

export default todoList;
