import React, { Component } from 'react'
import todoAxios from "../lib/todo-service"

export default class CreateTodos extends Component {
    state= {
        body: "",
        title: "",
        // todoPriority: "",
        // todoCompleted: false
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

    onSubmit = async (e) => {
        e.preventDefault();
        const { title, body} = this.state
        await todoAxios.createTodo(title, body)
        console.log(`Form Submitted`, this.state.title, this.state.body)
        this.setState({
           title: "",
            body: "",
        })
    }

    render() {
        return (
            <div style= {{marginTop: 20}}>
                <h2>Create New Todo</h2>
                <form onSubmit= {this.onSubmit}>
                    <div className= "form-container">
                            <label htmlFor="">Title</label>
                            <input type="text" value= {this.state.title} onChange= {(e) => this.onChangeTodoTitle(e)}/>
                            <label htmlFor="">Description</label>
                            <input type="text" value= {this.state.body} onChange= {(e) => this. onChangeTodoBody(e)}/>
                         
                                    <input type="submit" value= "Create Todo" className= "create-button"/>
                                    
                            
                        
                    </div>

                </form>
            </div>
        )
    }
}


