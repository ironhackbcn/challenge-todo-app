import React from 'react';
import axios from "axios";
import Create from "./../Create/Create";
import './List.css';

class List extends React.Component {

    state = {
        todoListArr: []
    }

    componentDidMount() {
        this.getTodoList();
    }

    getTodoList = () => {
        axios
            .get(
                `http://localhost:4000/api/v1/todos`,
            )
            .then((response) => {
                console.log('responseToGet', response);
                const todoListArr = response.data;
                this.setState({ todoListArr });
            })
            .catch((err) => console.log(err));
    }
    deleteHandler = (id) => {
        console.log('this.props', id);
        axios
            .delete(`http://localhost:4000/api/v1/todos/${id}`)
            .then((response) => {
                console.log("reponse", response);
                this.getTodoList();
            })
            .catch((err) => console.log(err))
    }

    render() {
        console.log('state', this.state);
        return (
            <div>
                <Create getTodoList={this.getTodoList} />
                {this.state.todoListArr && this.state.todoListArr.length > 0
                    ? this.state.todoListArr.map((todoItem) => {
                        return (
                            <div className="list-item">
                                <p>{todoItem.title}</p>
                                <p>{todoItem.body}</p>

                                <div>
                                    <button className="delete-button" onClick={() => { this.deleteHandler(todoItem._id) }}>
                                        <i class="fas fa-trash-alt"></i>
                                    </button>
                                </div>
                            </div>
                        );
                    })
                    : (
                        <p>
                            You don't have any Todo Items. Create one below.
                        </p>
                    )
                }
            </div>
        )
    }
}

export default List;



