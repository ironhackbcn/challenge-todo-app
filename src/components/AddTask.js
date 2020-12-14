import React, { Component } from 'react';
import services from "../lib/auth-service";

class AddTask extends Component {

    state = { 
        title: "",
        body: "",
        message: "" 
    };

    handleChange = event => {
        console.log("I'm within handlechange...")
        let { name, value } = event.target;
        console.log("name: ", name);
        console.log("value: ", value);
        this.setState({[name]: value});
    }

    handleFormCreate = async (event) => {
        event.preventDefault();
        console.log("I'm within create new task")
        try {
            const { title, body } = this.state;
            console.log("title: ", title);
            console.log("body: ", body);
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
        console.log("I'm within AddTask...");
        return (
            <div className="addTask">
                    <form>
                        <h1>New task</h1>
                        <br></br>
                        <br></br>
                        <input  name="title" 
                                value={this.state.title}
                                type="text"  
                                onChange={this.handleChange}
                                placeholder="add a title" />
                        <br></br>
                        <br></br>
                        <input  name="body" 
                                value={this.state.body} 
                                type="text" 
                                onChange={this.handleChange}
                                placeholder="add a description" />
                        <button onClick={this.handleFormCreate}>
                            <span>ADD NEW TASK</span>
                        </button>
                    </form>
            </div>
        );
    };
};

export default AddTask;