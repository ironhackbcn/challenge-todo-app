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
                            <input type="text" value= {this.state.body}  onChange= {(e) => this. onChangeTodoBody(e)}/>
                            <label htmlFor="">Priority</label>
                            <div >
                                <div >
                                    <input type="radio" placeholder= {this.state.title } id= "priorityLow" value="Low" checked= {this.state.todoPriority === "Low"} onChange= {(e) => this.onChangeTodoPriority(e)}/>
                                    <label >Low</label>
                                </div> 
                                <div >
                                    <input type="radio" placeholder= {this.state.description } id= "priorityMedium" value="Medium" checked= {this.state.todoPriority === "Medium"} onChange= {(e) => this.onChangeTodoPriority(e)}/>
                                    <label >Medium</label>
                                </div> 
                                <div >
                                    <input type="radio" id= "priorityHigh" value="High" checked= {this.state.todoPriority === "High"} onChange= {(e) => this.onChangeTodoPriority(e)}/>
                                    <label >High</label>
                                </div> 
                                 <div > 
                                    <input type="submit" className= "create-button" value= "Update Todo" />
                                    
                                </div>
                                </div>
                    </div>

                </form>
        </div>
        )
    }
}
