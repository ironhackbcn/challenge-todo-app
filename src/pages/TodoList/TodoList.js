import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class TodoList extends Component {
    state = {
        fullList: []
    }

    getAllList = () => {
        axios.get('http://localhost:4000/api/v1/todos')
            .then( (response) => {
                this.setState({ fullList: response.data })
            })
            .catch( (err) => console.log(err) );
    }

    eraseTodoTask = (id) => {
        axios.delete(`http://localhost:4000/api/v1/todos/${id}`)
            .then(() => {
                const updatedListArr = this.state.fullList((data) => data._id !== id)
                this.setState({fullList: updatedListArr})
            })
            .catch((err) => console.log(err));
    }

    componentDidMount() {
        this.getAllList()
    }

    render() {
        return (
            <div>
                <h3> My To-Do List </h3>
                <Link to={'/add'}>
                    <button>Add new Task</button>
                </Link>
                <div id="todo-list">
                    { this.state.fullList.length !== 0
                    ?  this.state.fullList.map( (listedItem) => {
                        return(
                            <div key={listedItem._id}>
                            <Link to={`/details/${listedItem._id}`}>
                                <h3>{listedItem.title}</h3>
                                <h4>{listedItem.description}</h4>
                            </Link>
                            <button onClick={this.eraseTodoTask}>X</button>
                            </div>
                        )
                    })
                    : <p> Start listing your TO-DO List</p>
                    }
                </div>
            </div>
        )
    }
}

export default TodoList;