import React, { Component } from 'react';
import services from "../lib/auth-service";

console.log("I'm HERE...")

class AllTasks extends Component {

    state = { 
        allToDos: [],
        message: ""
    };
    
    getAllTasks = async () => {
        console.log("Testing")
        try {
            console.log("I'm within getAllTasks")
          const allTasks = await services.getAllTasks();
          this.setState({ allToDos: allTasks})
          return allTasks;
        } catch (error) {
            console.log("Error while getting the tasks: ", error);
            this.setState({message: "Error while getting the ToDos: ," + error});
            
        }
    };

    render() {
        console.log("I'm within render all tasks...");
        const allTasks = this.getAllTasks();
        return (
            <div className="getAllTasks">
                <h1>List of tasks:</h1>
                <div>
                    <ul>
                        {allTasks.length &&
                        allTasks.map((task, index) => (
                            <li>key={index} {task.title}
                            </li>
                        ))}; 
                    </ul>
                </div>
            </div>
        );
    };
};

export default AllTasks;