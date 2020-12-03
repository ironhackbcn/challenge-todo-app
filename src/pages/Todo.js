import React, { Component } from 'react';
import axios from 'axios';
import CreateTodo from './CreateTodo';

class Todo extends Component {
    state = {
        listTodo: []
    };

    getTodo = async () => {
        try{
            let todos = await axios.get(`http://localhost:4000/api/v1/todos`)
            this.setState({
                listTodo: todos.data
            });
        } catch (err){
            console.log(err, "No se pueden mostrar los todos, intentelo más tarde")
        }
    };

    componentDidMount() {
        this.getTodo();
    }

    DeleteOneTodo = () => {
        const {params} = this.props.match;
        axios
            .delete(`http://localhost:4000/api/v1/todos/${params._id}`)
            .then( () => {
                this.props.history.push('/');
            })
            .catch( (err) => {
                console.log(err, "Couldn't delete the todo")
            });
    };
    /* se crea el Todo pero solo se ve cuando refrescas la pagina  */
    /* la ruta de Delete funciona pero no consigo que funcione el boton en si */
    
    render() {
        return (
            <div>
                <CreateTodo/>
                {this.state.listTodo.map(data => {
                    return (
                        <div key={data._id}>
                            <h4>{data.title}</h4>
                            <p>{data.body}</p>
                            <button onClick={() => this.DeleteOneTodo()}>
                            Delete
                             </button>
                        </div>    
                    )
                })}
            </div>
        )
    }
}

export default Todo;