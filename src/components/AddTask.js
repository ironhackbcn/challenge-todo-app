import React, { Component } from 'react';
import services from "../lib/auth-service";

class AddTask extends Component {

    state = { 
        title: "",
        body: "",
        message: "" 
    };

    handleFormCreate = async (event) => {
        event.preventDefault();
    
        try {
            const { title, body } = this.state;
            await services.createTask({ title, body });
            this.setState({
                title: title,
                body: body,
                message: "New task successfully created"
            });
    
          }
        catch (error) {
            this.setState({message: "Task was not created, error = : ," + error});
        };
        return;
    };

    render() {
        return (
            <div className="addTask">
                    <form>
                    <p1>New task</p1>
                    <br></br>
                    <br></br>
                    <input name="title" type="text" placeholder="task title" />
                    <br></br>
                    <br></br>
                    <input name="body" type="text" placeholder="task description" />
                    <button onClick={this.handleFormCreate}>
                        <span>ADD NEW TASK</span>
                    </button>
                    </form>
            </div>
        );
    };
};

export default AddTask;