import React, { Component } from 'react'
import todoAxios from "../lib/todo-service"

export default class EditTodo extends Component {
    state= {
        title: "",
        body: "",
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const { id } = this.props.match.params;
        const { title, body} = this.state
        await todoAxios.editTodo(id, title, body)
        this.setState({
            title: "",
            body: "",
        })
    }


    onChangeTodoBody = (e) => {
        this.setState({
            body: e.target.value
        })
    }

    onChangeTodoTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    onChangeTodoPriority = (e) => {
        this.setState({
            todoPriority: e.target.value
        })
    }

    componentDidMount = () => {
        const { title, body } = this.props.location.state.todo
        this.setState({
            title,
        body
        })
    }

    render() {

        
        console.log(this.props)
        return (
            <div style= {{marginTop: 20}}>
            <h2>Edit Todo</h2>
            <form onSubmit= {this.onSubmit}>
                    <div className= "form-container">
                            <label htmlFor="">Title</label>
                            <input type="text" value= {this.state.title}  onChange= {(e) => this.onChangeTodoTitle(e)}/>
                            <label htmlFor="">Description</label>
                            <input type="text" value= {this.state.body}  onChange= {(e) => this.onChangeTodoBody(e)}/>
                    </div>

                </form>
        </div>
        )
    }
}
