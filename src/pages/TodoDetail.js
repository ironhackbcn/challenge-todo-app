import React, { Component } from "react";
import TodoService from '../lib/todo-service';
import { Link } from "react-router-dom";
import '../components/todo.css'

class TodoDetail extends Component {
    state = {
        todo: {}
    }
    componentDidMount() {
        this.getDetailTodo();
    }

    handleNameChange(event) {
        let copyTodo = this.state.todo;
        copyTodo.title = event.target.value;
        this.setState({ todo: copyTodo });
    }

    handleSubmit(event) {
        event.preventDefault();
        TodoService.updateTodo(
          this.state.todo._id,
          this.state.todo
        ).then(() => {
          this.props.history.push("/");
        });
    }

    handleInputChange(event, propertyName) {
        let copyTodo = this.state.todo;
        copyTodo[propertyName] = event.target.value;
        this.setState({ todo: copyTodo   });
    }
    

    getDetailTodo = () => {
        const { params } = this.props.match;
        TodoService.getTodo(params.id)
          .then((responseFromApi) => {
            this.setState({
              todo: responseFromApi,
            });
          })
          .catch((error) => console.log(error));
      };

    deleteTodo = (id) => {
        console.log(id, 'id')
        TodoService.deleteTodo(id)
        .then(() => {
            this.props.history.goBack()
        });
      };

    render() {
        return (
            <div key={this.state.todo._id} className="containerTodo">
                <h1>{this.state.todo.title}</h1>
                <h3>{this.state.todo.body}</h3>
                <button onClick={() => this.deleteTodo(this.state.todo._id)} className="delete">
                DELETE
                </button>

                <form onSubmit={(e) => this.handleSubmit(e)} className="form">
                    <label>Title:</label>
                    <input
                        type="text"
                        defaultValue={this.state.todo.title}
                        className="input"
                        onChange={(e) => this.handleNameChange(e)}
                    />
                    
                    <label>Body:</label>
                    <input
                        type="text"
                        defaultValue={this.state.todo.body}
                        className="input"
                        onChange={(e) => this.handleInputChange(e, "body")}
                    />

                    <input type="submit" value="Save" className="button"/>
                </form>
                <Link to="/">
                    <button className="button">Go back</button>
                </Link>
            </div>
        )
    }

}

export default TodoDetail;