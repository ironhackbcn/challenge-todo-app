import React, { Component } from 'react'
import axios from "axios"

export default class createToDo extends Component {

    state = {
        title: "",
        description: ""
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    submitForm = async (event) => {
        event.preventDefault();
        const { title, description } = this.state
        if (title !== "" && description !== "") {
            const apiCaller = axios.create({
                baseURL: `http://localhost:4000/api/v1`,
                withCredentials: true
            })
            //En la documentación pone que pasemos el title por params, pero en las rutas del back no viene que la ruta de create utilice los params. 
            await apiCaller.post(`/todos/`, ({ "title": title, "body": description }))
            
            this.setState({
                title: "",
                description: ""
            })
            
            this.props.refresh()
        }
    }

    render() {
        const { title, description } = this.state
        return (
            <form>
                <label>Title: </label>
                <input type="text" name="title" value={title} onChange={this.handleChange} />
                <label>Description: </label>
                <input type="textArea" name="description" value={description} onChange={this.handleChange} />
                <p style={{cursor: "pointer"}} onClick={(e) => this.submitForm(e)}>Create</p>
            </form>
        )
    }
}
