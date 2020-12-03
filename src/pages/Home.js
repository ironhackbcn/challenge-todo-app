import React, { Component } from "react";
import axios from "axios";
// import background from "../../background.jpg"
class Home extends Component {
    state = {
        title: "",
        body: "",
        editToggle: false,
        todolist: []
    };

    handleInput = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    };

    createTodo = (e) => {
        e.preventDefault();

        let sendData = { title: this.state.title, body: this.state.body }
        console.log(sendData)
        axios
            .post(`http://localhost:4000/api/v1/todos`, sendData)
            .then(res => {
                this.getTodo()
            })
            .catch(err => console.log(err));

        this.setState({
            title: "",
            body: ""
        });
    };

    getTodo = () => {
        axios
            .get(`http://localhost:4000/api/v1/todos`)
            .then(res => {

                const todolist = res.data.reverse();
                this.setState({ todolist });
            })
            .catch(err => console.log(err));
    };

    removeTodo = id => {
        axios
            .delete(`http://localhost:4000/api/v1/todos/${id}`)
            .then(() => {
                console.log("Removed");
            })
            .catch(err => console.log(err));

        this.setState({
            todolist: this.state.todolist.filter(elem => {
                return elem._id !== id;
            })
        });
    };

    updateTodo = id => {
        let editData = { title: this.state.title, body: this.state.body }

        axios
            .put(`http://localhost:4000/api/v1/todos/${id}`, {
                editData
            })
            .then(res => {
                console.log("updated");
            })
            .catch(err => {
                console.log(err);
            })

    }

    componentDidMount() {
        this.getTodo();
    }

    render() {
        return (
            <main >
                <div id="mainTitle">
                    <h1>My Tasks!</h1>
                    <button onClick={() => this.setState({ editToggle: !this.state.editToggle })}>Edit</button>
                </div>


                <form method="post" className="formAdd" onSubmit={this.createTodo}>
                    <label></label>
                    <input
                        className="formCategory"
                        type="text"
                        name="title"
                        placeholder="Add Category"
                        value={this.state.title}
                        onChange={this.handleInput}
                    ></input>
                    <label></label>
                    <textarea
                        placeholder="Task to complete"
                        className="formBodymessage"
                        name="body"
                        value={this.state.body}
                        onChange={this.handleInput}
                        rows="1"
                    ></textarea>
                    <button type="submit">
                        Submit
                      </button>
                </form>

                <div>
                    {this.state.todolist.map((todo, key) => {

                        return (

                            <div key={key} className="todoBox">
                                {
                                    this.state.editToggle ?
                                        <p className="todoCategory" >{todo.title}</p>
                                        :
                                        <input type="text" name={todo.key} value={todo.title} onChange={this.handleInput} className="todoCategory" ></input>
                                }
                                <p className="todoBodymessage">{todo.body}</p>
                                <div>

                                    <button
                                        className="editButton"
                                        type="button"
                                        onClick={() => {
                                            this.updateTodo(todo._id);
                                        }}
                                        key={todo._id}
                                    >
                                        Save Edit
                                 </button>
                                    <button
                                        className="editButton"
                                        type="button"
                                        onClick={() => {
                                            this.removeTodo(todo._id);
                                        }}

                                    >
                                        Remove
                                 </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </main>
        );
    }
}

export default Home;