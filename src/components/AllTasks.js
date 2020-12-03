import React, { Component } from 'react';
import services from "../lib/auth-service";

class AllTasks extends Component {

    // state = { 
    //     title: "",
    //     body: "",
    //     message: "" 
    // };

    getAllTasks = async () => {
    
        try {
          const allTasks = await services.getAllTasks();
          return allTasks;
        //   this.setState({ agenda: agenda});
        } catch (error) {
            console.log("Error while getting the tasks: ", error);
            // this.setState({messageAboutAgenda: "Error while getting the agenda: ," + error});
            
        }
    };

    render() {
        const allTasks = this.getAllTasks();
        return (
            <div className="addTask">
                <p1>List of tasks:</p1>
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