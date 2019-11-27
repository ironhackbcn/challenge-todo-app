import React, { Component } from 'react'
import todoService from '../sevices/TodoService'
import TodoInput from '../components/TodoInput'

export default class EditTodo extends Component {
    state={
        title:"",
        body:"",
        idTodo:this.props.match.params.id,
    }
    componentDidMount(){
        console.log(this.state)
        todoService.getTodo(this.state.idTodo)

        .then(response=>{
            console.log(response)
            this.setState({
                title: response.data.title,
                body: response.data.body,
                idTodo:this.props.match.params,
            })
        })
        .catch(error=>console.log(error))

        
    }

    handleOnChange = event => {
        event.preventDefault();
        const {
          name,
          value
        } = event.target;
        this.setState({
          [name]: value
        });
        console.log(this.state)
      };

    handleSubmit = event =>{
        event.preventDefault();
        const{
            title,
            body,
            idTodo
        }= this.state

        const updateTodo ={
            title,
            body,
        }
        todoService.updateTodo(idTodo.id,updateTodo)
        .then(response=>{
            this.props.history.goBack()
        })
        .catch(error=> console.log(error))
    }
    render() {
        const{
            title,
            body,
        }=this.state
        return (
            <div>
                <TodoInput
                handleOnChange={this.handleOnChange}
                handleSubmit={this.handleSubmit}
                title={title}
                body={body}/>
            </div>
        )
    }
}
