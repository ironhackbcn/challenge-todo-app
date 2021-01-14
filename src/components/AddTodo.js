import React, {Component} from "react"
import axios from "axios";

class AddTodo extends Component {
    state = {
        title: "",
        body: ""
    }

    handleFormSubmit = (event) => {
        event.preventDefault();

        const {title, body} = this.state;

        axios.post("http://localhost:4000/api/v1/todos", {title, body})
        .then ( () => {
            //refresh todolist
            //this.props.getData();

            this.setState({ thitle: "", body:""})
        })
        .catch((err) => console.log(err));
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.serState({[name]: value});
    }

    render() {
        return (
          <div>
            <form onSubmit={this.handleFormSubmit}>
                <label>Title:</label>
                <input 
                    type="text" 
                    name="title"
                    onChange= {this.handleChange}
                    value={this.state.title}
                />

                <label>Title:</label>
                <textarea 
                    type="text" 
                    name="body"
                    onChange= {this.handleChange}
                    value={this.state.body}
                />

                <button type="submit">Save Todo</button>
            </form>

          </div>
        )
    }
}

export default AddTodo;