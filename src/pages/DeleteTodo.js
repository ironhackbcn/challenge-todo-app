import React, { Component } from 'react';
import axios from 'axios';

class DeleteTodo extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    getOneTodo = () => {
        const { params } = this.props.match;
        axios
            .get(`http://localhost:4000/api/v1/todos/${params.id}`)
            .then( (oneTodo) => {
                const thatOneTodo = oneTodo.data;
                this.setState(thatOneTodo);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    DeleteOneTodo = () => {
        const {params} = this.props.match;
        axios
            .delete(`http://localhost:4000/api/v1/todos/${params.id}`)
            .then( () => {
                this.props.history.push('/');
            })
            .catch( (err) => {
                console.log(err, "Couldn't delete the todo")
            });
    };
    
    componentDidMount() {
        this.getOneTodo();
    };

    render() {
        return (
            <div>
                <h4>{this.state.title}</h4>
                <p>{this.state.body}</p>
                <button onClick={() => this.DeleteOneTodo()}>
              Delete
            </button>
            </div>
        )
    }
}

export default DeleteTodo;